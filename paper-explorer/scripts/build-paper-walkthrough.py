#!/usr/bin/env python3
"""Build a scrolling walkthrough video and GIF from the paper PDF."""

from __future__ import annotations

import argparse
import shutil
import subprocess
from pathlib import Path

from PIL import Image, ImageDraw

Image.MAX_IMAGE_PIXELS = None


def run(command: list[str]) -> None:
    print("+", " ".join(command))
    subprocess.run(command, check=True)


def render_pdf_pages(pdf: Path, frames_dir: Path, dpi: int) -> list[Path]:
    frames_dir.mkdir(parents=True, exist_ok=True)
    for old_frame in frames_dir.glob("page-*.png"):
        old_frame.unlink()

    run(["pdftoppm", "-png", "-r", str(dpi), str(pdf), str(frames_dir / "page")])
    pages = sorted(frames_dir.glob("page-*.png"))
    if not pages:
        raise RuntimeError(f"No rendered pages created from {pdf}")
    return pages


def resize_page(page: Image.Image, target_width: int) -> Image.Image:
    ratio = target_width / page.width
    target_height = round(page.height * ratio)
    return page.resize((target_width, target_height), Image.Resampling.LANCZOS)


def build_strip(
    page_paths: list[Path],
    strip_path: Path,
    *,
    viewport_width: int,
    page_width: int,
    top_margin: int,
    bottom_margin: int,
    gap: int,
) -> None:
    pages = [resize_page(Image.open(path).convert("RGB"), page_width) for path in page_paths]
    height = top_margin + bottom_margin + sum(page.height for page in pages) + gap * (len(pages) - 1)
    background = (244, 246, 248)
    strip = Image.new("RGB", (viewport_width, height), background)
    draw = ImageDraw.Draw(strip)

    y = top_margin
    x = (viewport_width - page_width) // 2
    for index, page in enumerate(pages, start=1):
        shadow = 14
        draw.rounded_rectangle(
            (x + shadow, y + shadow, x + page.width + shadow, y + page.height + shadow),
            radius=10,
            fill=(215, 220, 226),
        )
        draw.rectangle((x - 1, y - 1, x + page.width + 1, y + page.height + 1), outline=(206, 212, 220), width=2)
        strip.paste(page, (x, y))
        draw.rounded_rectangle(
            (x + page.width - 72, y + page.height - 38, x + page.width - 14, y + page.height - 12),
            radius=8,
            fill=(17, 24, 39),
        )
        draw.text((x + page.width - 58, y + page.height - 33), f"{index:02d}", fill=(255, 255, 255))
        y += page.height + gap

    strip_path.parent.mkdir(parents=True, exist_ok=True)
    strip.save(strip_path, optimize=True)


def crop_filter(width: int, height: int, duration: float, fps: int) -> str:
    return f"crop={width}:{height}:0:(ih-oh)*t/{duration},fps={fps},format=yuv420p"


def build_mp4(strip_path: Path, output_mp4: Path, *, width: int, height: int, duration: float, fps: int) -> None:
    output_mp4.parent.mkdir(parents=True, exist_ok=True)
    run([
        "ffmpeg",
        "-y",
        "-loop",
        "1",
        "-t",
        str(duration),
        "-i",
        str(strip_path),
        "-vf",
        crop_filter(width, height, duration, fps),
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        "20",
        "-movflags",
        "+faststart",
        str(output_mp4),
    ])


def build_gif(
    strip_path: Path,
    output_gif: Path,
    *,
    width: int,
    height: int,
    duration: float,
    fps: int,
    output_width: int,
) -> None:
    output_gif.parent.mkdir(parents=True, exist_ok=True)
    palette = output_gif.with_suffix(".palette.png")
    base = f"crop={width}:{height}:0:(ih-oh)*t/{duration},fps={fps},scale={output_width}:-1:flags=lanczos"

    run([
        "ffmpeg",
        "-y",
        "-loop",
        "1",
        "-t",
        str(duration),
        "-i",
        str(strip_path),
        "-vf",
        f"{base},palettegen=stats_mode=diff",
        "-frames:v",
        "1",
        "-update",
        "1",
        str(palette),
    ])
    run([
        "ffmpeg",
        "-y",
        "-loop",
        "1",
        "-t",
        str(duration),
        "-i",
        str(strip_path),
        "-i",
        str(palette),
        "-lavfi",
        f"{base}[x];[x][1:v]paletteuse=dither=sierra2_4a",
        str(output_gif),
    ])
    palette.unlink(missing_ok=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf", type=Path, default=None)
    parser.add_argument("--workdir", type=Path, default=Path("paper-explorer/media/walkthrough"))
    parser.add_argument("--output-dir", type=Path, default=Path("paper-explorer/site/assets"))
    parser.add_argument("--dpi", type=int, default=150)
    parser.add_argument("--duration", type=float, default=48.0)
    parser.add_argument("--gif-duration", type=float, default=24.0)
    parser.add_argument("--viewport-width", type=int, default=1080)
    parser.add_argument("--viewport-height", type=int, default=1920)
    args = parser.parse_args()

    pdf = args.pdf or Path("paper-explorer/site/assets/direction-aware-tda-paper.pdf")
    if not pdf.exists():
        fallback_pdf = Path("paper-explorer/media/build/main.pdf")
        if fallback_pdf.exists():
            pdf = fallback_pdf
        else:
            raise FileNotFoundError(
                "PDF not found. Build it first with: "
                "cd arXiv-2604.08105v1 && latexmk -pdf -interaction=nonstopmode "
                "-halt-on-error -file-line-error -outdir=../paper-explorer/media/build main.tex"
            )

    frames_dir = args.workdir / "frames"
    strip_path = args.workdir / "paper-pages-strip.png"
    pages = render_pdf_pages(pdf, frames_dir, args.dpi)
    build_strip(
        pages,
        strip_path,
        viewport_width=args.viewport_width,
        page_width=960,
        top_margin=160,
        bottom_margin=160,
        gap=84,
    )

    build_mp4(
        strip_path,
        args.output_dir / "paper-walkthrough.mp4",
        width=args.viewport_width,
        height=args.viewport_height,
        duration=args.duration,
        fps=24,
    )
    build_gif(
        strip_path,
        args.output_dir / "paper-walkthrough.gif",
        width=args.viewport_width,
        height=args.viewport_height,
        duration=args.gif_duration,
        fps=8,
        output_width=360,
    )
    output_pdf = args.output_dir / "direction-aware-tda-paper.pdf"
    if pdf.resolve() != output_pdf.resolve():
        shutil.copy2(pdf, output_pdf)


if __name__ == "__main__":
    main()
