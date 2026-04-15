# Supplement: Per-Fold Cross-Validation Performance

```{admonition} Coverage
:class: annotation-legend
This page annotates **Supplementary information**, source lines **105-159**. Blue blocks reproduce or faithfully restate the original source material. Amber blocks are model-added interpretation explaining role, assumptions, and reading context.
```

```{admonition} Reading lens
:class: model-interpretation
- This supplementary section fills in implementation detail or additional evidence that the main text compresses.
- Read it as support for reproducibility: generation procedures, additional RTPxyz results, and fold-level performance tables.
- Where the main text states a result, the supplement often exposes the variation or construction detail behind it.
```

## Annotated Source

### Per-Fold Cross-Validation Performance

::::{admonition} Original paper material - source lines 105-105
:class: paper-original

```latex
 105 | \section{Per-Fold Cross-Validation Performance}
```

**Readable text**

> Per-Fold Cross-Validation Performance

::::

::::{admonition} Model-added interpretation - source lines 105-105
:class: model-interpretation

- This heading opens a new logical unit: **Per-Fold Cross-Validation Performance**.
- Use it as a checkpoint: the paper is changing either scale, object, method, or evidential role.
- In the supplement, this block provides extra construction detail or result granularity that supports the main text.
::::

::::{admonition} Original paper material - source lines 106-106
:class: paper-original

```latex
 106 | The implemented cross-validation procedure allows for a direct comparison of the models within each fold, as identical train/validation/test splits are used throughout. This provides substantially more detailed insight than the averaged results reported in Table 1 of the manuscript.
```

**Readable text**

> The implemented cross-validation procedure allows for a direct comparison of the models within each fold, as identical train/validation/test splits are used throughout. This provides substantially more detailed insight than the averaged results reported in Table 1 of the manuscript.

::::

::::{admonition} Model-added interpretation - source lines 106-106
:class: model-interpretation

- In the supplement, this block provides extra construction detail or result granularity that supports the main text.
::::

::::{admonition} Original paper material - source lines 108-108
:class: paper-original

```latex
 108 | The per-fold results for the $R^2$ and MAE metrics are presented in Tables~\ref{tab:fold_r2} and~\ref{tab:fold_mae}, respectively. The column Gain indicates whether the use of directional descriptors improves the performance, i.e., increases $R^2$ or decreases MAE. The last two rows of each table report the mean and standard deviation across folds for each method.
```

**Readable text**

> The per-fold results for the $R^2$ and MAE metrics are presented in Tables (ref: tab:fold_r2) and (ref: tab:fold_mae), respectively. The column Gain indicates whether the use of directional descriptors improves the performance, i.e., increases $R^2$ or decreases MAE. The last two rows of each table report the mean and standard deviation across folds for each method.

::::

::::{admonition} Model-added interpretation - source lines 108-108
:class: model-interpretation

- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This is a performance-interpretation block. Watch both $R^2$ and MAE because they answer different questions about explained variance and absolute error.
- In the supplement, this block provides extra construction detail or result granularity that supports the main text.
::::

::::{admonition} Original paper material - source lines 110-110
:class: paper-original

```latex
 110 | We report results for the PH+ECP descriptor on the RTPxz and RTPxy datasets, as this combination constitutes the main result of the paper. As shown in the tables, the improvement obtained by incorporating directional descriptors is consistent across all folds and for both datasets: $R^2$ increases and MAE decreases in every single split, demonstrating that the performance gain is systematic rather than incidental. The only exception is the standard deviation of $R^2$ for RTPxy, which is slightly higher for the directional descriptors compared to the non-directional variant.
```

**Readable text**

> We report results for the PH+ECP descriptor on the RTPxz and RTPxy datasets, as this combination constitutes the main result of the paper. As shown in the tables, the improvement obtained by incorporating directional descriptors is consistent across all folds and for both datasets: $R^2$ increases and MAE decreases in every single split, demonstrating that the performance gain is systematic rather than incidental. The only exception is the standard deviation of $R^2$ for RTPxy, which is slightly higher for the directional descriptors compared to the non-directional variant.

::::

::::{admonition} Model-added interpretation - source lines 110-110
:class: model-interpretation

- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This defines the RTP construction, where anisotropy is controlled in Fourier space before thresholding into a porous structure.
- This is a performance-interpretation block. Watch both $R^2$ and MAE because they answer different questions about explained variance and absolute error.
- In the supplement, this block provides extra construction detail or result granularity that supports the main text.
::::

::::{admonition} Original paper material - source lines 112-131
:class: paper-original

```latex
 112 | \begin{table}[]
 113 | \caption{$R^2$ scores obtained in each cross-validation fold for the RTPxz and RTPxy datasets using the PH+ECP descriptor. Results for the CNN model are provided for reference. The column \textit{Gain} indicates whether the inclusion of directional descriptors improves performance (i.e., increases $R^2$). The last two rows report the mean and standard deviation across folds.}
 114 | \label{tab:fold_r2}
 115 | \begin{tabular}{r|rrlr|rrlrr}
 116 | \hline
 117 | \multicolumn{1}{l|}{$R^2$} & \multicolumn{4}{c|}{RTPxz} & \multicolumn{4}{c}{RTPxy} & \multicolumn{1}{l}{} \\
 118 | \multicolumn{1}{l|}{} & \multicolumn{3}{c}{PH+ECP} & \multicolumn{1}{l|}{CNN} & \multicolumn{3}{c}{PH+ECP} & \multicolumn{1}{l}{CNN} & \multicolumn{1}{l}{} \\
 119 | \multicolumn{1}{l|}{fold} & \multicolumn{1}{l}{Directional} & \multicolumn{1}{l}{Non-directional} & Gain & \multicolumn{1}{l|}{---} & \multicolumn{1}{l}{Directional} & \multicolumn{1}{l}{Non-directional} & Gain & \multicolumn{1}{l}{--} &  \\ \hline
 120 | 1 & 0.9706 & 0.7213 & Yes & 0.9689 & 0.9176 & 0.9012 & Yes & 0.9852 &  \\
 121 | 2 & 0.9829 & 0.8088 & Yes & 0.9876 & 0.9777 & 0.9587 & Yes & 0.9751 &  \\
 122 | 3 & 0.9814 & 0.7638 & Yes & 0.9923 & 0.9265 & 0.9179 & Yes & 0.9889 &  \\
 123 | 4 & 0.9726 & 0.7582 & Yes & 0.9899 & 0.9132 & 0.9013 & Yes & 0.9823 &  \\
 124 | 5 & 0.9795 & 0.7018 & Yes & 0.9889 & 0.9408 & 0.9162 & Yes & 0.9892 &  \\
 125 | 6 & 0.9798 & 0.7473 & Yes & 0.9776 & 0.9525 & 0.9035 & Yes & 0.9732 &  \\
 126 | 7 & 0.9764 & 0.7866 & Yes & 0.9828 & 0.9532 & 0.9130 & Yes & 0.9863 &  \\
 127 | 8 & 0.9816 & 0.7464 & Yes & 0.9884 & 0.9233 & 0.9169 & Yes & 0.9541 &  \\ \hline
 128 | \multicolumn{1}{l|}{Mean} & 0.9781 & 0.7543 & Yes & 0.9846 & 0.9381 & 0.9161 & Yes & 0.9793 &  \\
 129 | \multicolumn{1}{l|}{Std} & 0.0045 & 0.0340 & Yes & 0.0078 & 0.0221 & 0.0186 & No & 0.0118 &  \\ \hline
 130 | \end{tabular}
 131 | \end{table}
```

**Readable text**

> $R^2$ scores obtained in each cross-validation fold for the RTPxz and RTPxy datasets using the PH+ECP descriptor. Results for the CNN model are provided for reference. The column Gain indicates whether the inclusion of directional descriptors improves performance (i.e., increases $R^2$). The last two rows report the mean and standard deviation across folds.

::::

::::{admonition} Model-added interpretation - source lines 112-131
:class: model-interpretation

- This table is a quantitative claim surface. Compare rows by dataset, descriptor family, directional status, and error metric rather than reading only the best score.
- The main inferential question is whether directional information improves prediction under the same learning setup.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This defines the RTP construction, where anisotropy is controlled in Fourier space before thresholding into a porous structure.
- This sets the learning comparison: compact topological descriptors with gradient boosting versus voxel-level convolutional models.
::::

::::{admonition} Original paper material - source lines 133-152
:class: paper-original

```latex
 133 | \begin{table}[]
 134 | \caption{The same as Table \ref{tab:fold_r2} but for MAE.}
 135 | \label{tab:fold_mae}
 136 | \begin{tabular}{r|rrlr|rrlrr}
 137 | \hline
 138 | \multicolumn{1}{l|}{MAE} & \multicolumn{4}{c|}{RTPxz} & \multicolumn{4}{c}{RTPxy} & \multicolumn{1}{l}{} \\
 139 | \multicolumn{1}{l|}{} & \multicolumn{3}{c}{PH+ECP} & \multicolumn{1}{l|}{CNN} & \multicolumn{3}{c}{PH+ECP} & \multicolumn{1}{l}{CNN} & \multicolumn{1}{l}{} \\
 140 | \multicolumn{1}{l|}{fold} & \multicolumn{1}{l}{Directional} & \multicolumn{1}{l}{Non-directional} & Gain & \multicolumn{1}{l|}{---} & \multicolumn{1}{l}{Directional} & \multicolumn{1}{l}{Non-directional} & Gain & \multicolumn{1}{l}{--} &  \\ \hline
 141 | 1 & 2.116 & 7.532 & Yes & 2.269 & 2.051 & 2.202 & Yes & 0.871 &  \\
 142 | 2 & 1.572 & 6.511 & Yes & 1.504 & 1.120 & 1.493 & Yes & 1.225 &  \\
 143 | 3 & 1.631 & 6.803 & Yes & 1.185 & 1.512 & 1.763 & Yes & 0.701 &  \\
 144 | 4 & 1.965 & 6.757 & Yes & 1.203 & 1.674 & 1.735 & Yes & 0.792 &  \\
 145 | 5 & 1.820 & 7.821 & Yes & 1.380 & 1.764 & 2.087 & Yes & 0.735 &  \\
 146 | 6 & 1.891 & 7.331 & Yes & 2.062 & 1.656 & 2.213 & Yes & 1.243 &  \\
 147 | 7 & 2.119 & 6.788 & Yes & 2.021 & 1.850 & 2.396 & Yes & 1.060 &  \\
 148 | 8 & 1.730 & 6.878 & Yes & 1.336 & 1.906 & 1.989 & Yes & 1.520 &  \\ \hline
 149 | \multicolumn{1}{l|}{Mean} & 1.855 & 7.053 & Yes & 1.620 & 1.692 & 1.985 & Yes & 1.018 &  \\
 150 | \multicolumn{1}{l|}{Std} & 0.207 & 0.454 & Yes & 0.430 & 0.284 & 0.300 & Yes & 0.293 &  \\ \hline
 151 | \end{tabular}
 152 | \end{table}
```

**Readable text**

> The same as Table (ref: tab:fold_r2) but for MAE.

::::

::::{admonition} Model-added interpretation - source lines 133-152
:class: model-interpretation

- This table is a quantitative claim surface. Compare rows by dataset, descriptor family, directional status, and error metric rather than reading only the best score.
- The main inferential question is whether directional information improves prediction under the same learning setup.
- This is central to the paper: the loading direction must survive the descriptor construction because the material response is axis-dependent.
- This defines the RTP construction, where anisotropy is controlled in Fourier space before thresholding into a porous structure.
- This sets the learning comparison: compact topological descriptors with gradient boosting versus voxel-level convolutional models.
::::

::::{admonition} Original paper material - source lines 154-155
:class: paper-original

```latex
 154 | % \bibliographystyle{sn-mathphys-num}
 155 | % \bibliography{references}
```

::::

::::{admonition} Model-added interpretation - source lines 154-155
:class: model-interpretation

- In the supplement, this block provides extra construction detail or result granularity that supports the main text.
::::

