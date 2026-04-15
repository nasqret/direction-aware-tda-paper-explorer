# Declarations

```{admonition} Coverage
:class: important
This page annotates **Main manuscript**, source lines **607-631**. The original LaTeX source is reproduced in line-numbered blocks, followed by commentary explaining the role, assumptions, and interpretation of each block.
```

## Reading Lens

- These lines define authorship, competing-interest, and publication metadata rather than technical content.
- For reproducibility, declarations matter because they identify responsibility and potential conflicts around the study.
- They should be preserved in a faithful companion even though they do not affect the mathematical argument.

## Annotated Source

### Declarations

::::{admonition} Source lines 607-607
:class: note

```latex
 607 | \section*{Declarations}
```

**Readable text**

> Declarations

**Commentary and remarks**

- This heading opens a new logical unit: **Declarations**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

#### Author Contributions Statement

::::{admonition} Source lines 608-608
:class: note

```latex
 608 | \subsection*{Author Contributions Statement}
```

**Readable text**

> Author Contributions Statement

**Commentary and remarks**

- This heading opens a new logical unit: **Author Contributions Statement**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 609-609
:class: note

```latex
 609 | R.T., M.B., and J.M. wrote the main manuscript. R.T., M.B., and B.N. generated the microstructures. R.T. and M.B. performed the FFTMAD simulations. R.T. developed the machine-learning code and ran computations. M.B., J.M., and P.D. designed and implemented the topological data analysis framework and reviewed the machine-learning and FFTMAD workflows. R.T., M.B., J.M., B.N., and P.D. contributed to the methodology. P.D., M.H., and B.N. provided computational resources. P.D. and M.H. supervised project administration. R.T. prepared all figures except Figure 3, which J.M. and M.B prepared. All authors contributed to formal analysis, validation of the results, and reviewed the final version of the manuscript. 
```

**Readable text**

> R.T., M.B., and J.M. wrote the main manuscript. R.T., M.B., and B.N. generated the microstructures. R.T. and M.B. performed the FFTMAD simulations. R.T. developed the machine-learning code and ran computations. M.B., J.M., and P.D. designed and implemented the topological data analysis framework and reviewed the machine-learning and FFTMAD workflows. R.T., M.B., J.M., B.N., and P.D. contributed to the methodology. P.D., M.H., and B.N. provided computational resources. P.D. and M.H. supervised project administration. R.T. prepared all figures except Figure 3, which J.M. and M.B prepared. All authors contributed to formal analysis, validation of the results, and reviewed the final version of the manuscript.

**Commentary and remarks**

- This keeps the physical object in view: porous solid/void geometry is the structure whose topology and mechanics are being related.
- This introduces or uses TDA as a multiscale language for connectivity, loops, cavities, and Euler-characteristic summaries.
- This is the target-generation mechanism: the paper uses FFT-based homogenization rather than treating stiffness labels as empirical annotations.
- This is part of the reproducibility surface: it points from the paper to the code/data artifacts indexed elsewhere in this explorer.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

#### Competing Interests

::::{admonition} Source lines 611-611
:class: note

```latex
 611 | \subsection*{Competing Interests}
```

**Readable text**

> Competing Interests

**Commentary and remarks**

- This heading opens a new logical unit: **Competing Interests**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 612-612
:class: note

```latex
 612 | The authors declare no competing interests.
```

**Readable text**

> The authors declare no competing interests.

**Commentary and remarks**

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 614-614
:class: note

```latex
 614 | \clearpage
```

**Commentary and remarks**

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 616-620
:class: note

```latex
 616 | % Supplement-style numbering
 617 | \setcounter{section}{0}
 618 | \setcounter{figure}{0}
 619 | \setcounter{table}{0}
 620 | \setcounter{equation}{0}
```

**Commentary and remarks**

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 622-628
:class: note

```latex
 622 | \renewcommand{\thesection}{S\arabic{section}}
 623 | \renewcommand{\thesubsection}{S\arabic{section}.\arabic{subsection}}
 624 | \renewcommand{\thesubsubsection}{S\arabic{section}.\arabic{subsection}.\arabic{subsubsection}}
 625 | \renewcommand{\thefigure}{S\arabic{figure}}
 626 | \renewcommand{\thetable}{S\arabic{table}}
 627 | \renewcommand{\theequation}{S\arabic{equation}}
 628 | \include{supplement.tex}
```

**Readable text**

> Ssection Ssection.subsection Ssection.subsection.subsubsection Sfigure Stable Sequation includesupplement.tex

**Commentary and remarks**

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

::::{admonition} Source lines 630-630
:class: note

```latex
 630 | \clearpage
```

**Commentary and remarks**

- This block is preserved so the commentary remains anchored to the manuscript rather than to a summary of it.
::::

