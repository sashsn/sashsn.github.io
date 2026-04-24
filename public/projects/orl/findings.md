# ENCM 509 Lab 7 - Face Recognition: Project Findings

**Group 56** | Sadman Shahriar (30121460) | Shreosi Debnath (30111867)
**Date:** April 2026

---

## 1. Project Overview

This project implements **Subproject 1**: Face recognition in Python using LBP, Neural Networks, and SVM (comparative analysis) on the AT&T (ORL) face database. The implementation compares four model configurations across two feature representations and two classifiers.

---

## 2. Implementation Assessment

### 2.1 What Was Implemented (Checklist vs. Requirements)

| Requirement (from spec) | Status | Notes |
|---|---|---|
| Face detection using OpenCV Haar Cascades | Done | Demonstrated on sample image |
| Facial feature extraction (raw pixels) | Done | 50x50 resized, flattened to 2500-D |
| Facial feature extraction (LBP) | Done | Grid-based LBP histograms (6x6 grid used for final) |
| SVM classifier with hyperparameter tuning | Done | 6 combinations of C and gamma tested |
| MLP classifier with architecture tuning | Done | 5 architectures x 2 learning rates tested |
| ROC curves | Done | Averaged across 40 subjects, all 4 models |
| DET curves | Done | Averaged across 40 subjects, all 4 models |
| Analysis of results | Done | Written report covers accuracy, curves, tuning |
| 50/50 train/test split with stratification | Done | 200 train / 200 test, subject-balanced |
| LBP grid-size experiment | Done | 4x4, 6x6, 8x8, 10x10 tested |

### 2.2 Results Summary

| Model | Accuracy |
|---|---|
| SVM (raw pixels) | **96.0%** |
| SVM (LBP) | 91.0% |
| MLP (raw pixels) | 90.0% |
| MLP (LBP) | 73.5% |

**Best result:** SVM on raw pixels at 96.0% (C=5.0, gamma='scale')

---

## 3. Issues and Observations

### 3.1 Minor Code Issues

| Issue | Severity | Location | Description |
|---|---|---|---|
| Unused parameter `n_bins` | Low | `load_all_data_lbp()` | The function accepts `n_bins=16` but never uses it; histogram bins are hardcoded to `n_points+2` |
| Misleading expected output comment | Low | Cell 5 (data loading) | Comment says "LBP train: (200, 64)" but actual output is (200, 640) for 8x8 grid. The 6x6 grid produces (200, 360). |
| Inconsistent image sizes | Low | Raw vs LBP pipelines | Raw pipeline resizes to 50x50, LBP pipeline resizes to 64x64. Not a bug, but worth noting. |
| Face detection not integrated | Info | Cell 11 | Haar Cascade face detection is demonstrated standalone but not used in the actual recognition pipeline. The ATT dataset is already pre-cropped, so this is reasonable. |

### 3.2 Methodological Observations

| Observation | Impact | Recommendation |
|---|---|---|
| No cross-validation | Medium | Single 50/50 split could give variable results. K-fold CV would be more robust, though the spec only requires a single split. |
| Final models use 6x6 LBP grid, not optimal 8x8 | Low | The grid experiment shows 8x8 (91.0%) outperforms 6x6 (90.5%), but final models were trained on the 6x6 split. Results could improve slightly with 8x8. |
| MLP chosen architecture (128,64,128) is suboptimal | Info | The MLP tuning table shows (128,) at lr=0.001 gives 94.5% raw / 92.0% LBP -- much better than the chosen (128,64,128) which gives 90.0% / 73.5%. The final model uses the architecture from the spec example, not the best one found. |
| SVM final uses gamma='scale' not best gamma=0.01 | Low | Tuning shows C=5.0, gamma=0.01 gives 95.5% on raw. The final SVM uses gamma='scale' which gives 96.0%. Slight discrepancy in reporting -- the 96.0% result comes from gamma='scale', not the tuned value. |

### 3.3 Report Quality

| Aspect | Assessment |
|---|---|
| Introduction | Clear, covers LBP/SVM/MLP concepts well |
| Procedure | Complete, explains preprocessing, features, and classification |
| Results & Analysis | Thorough -- accuracy table, ROC/DET curves, hyperparameter tables |
| Conclusion | Solid, explains why raw pixels outperformed LBP on this dataset |
| Visualizations | 4 figures: face detection, LBP visualization, grid experiment, ROC/DET |
| References | Minimal -- only "Lecture notes and Labs" cited |

---

## 4. Key Technical Findings

### 4.1 Why Raw Pixels Beat LBP on This Dataset

The counter-intuitive result (raw > LBP) is well-explained in the report:
- ATT dataset has **controlled conditions**: dark homogeneous background, frontal upright pose, consistent lighting
- Raw pixel intensities are already highly discriminative when images are well-aligned
- LBP's texture abstraction **discards** useful fine-grained intensity information
- LBP is designed for robustness in **unconstrained** environments (variable lighting, pose) which is not needed here

### 4.2 SVM vs MLP Performance

- SVM excels on this small dataset (200 training samples, 40 classes = 5 per class)
- SVM's maximum-margin approach is more effective with limited data
- MLP requires more data to generalize; deeper architectures (128,64,128) overfit with only 5 samples per class
- Simpler MLP architectures (single hidden layer of 128) performed comparably to SVM

### 4.3 LBP Grid Size Optimization

| Grid | Accuracy | Feature Dim |
|---|---|---|
| 4x4 | 87.5% | 160 |
| 6x6 | 90.5% | 360 |
| 8x8 | **91.0%** | 640 |
| 10x10 | 90.5% | 1000 |

Optimal grid is 8x8 -- balances spatial granularity vs. cell size.

---

## 5. Overall Verdict

**The implementation is solid and meets all project requirements.** The code runs correctly, produces expected results, includes thorough hyperparameter experimentation, and the report provides good analysis. The issues identified above are minor and do not affect the correctness of the results.

### Strengths
- Complete pipeline from data loading through evaluation
- Comprehensive hyperparameter tuning for both SVM and MLP
- Multiple visualizations (LBP, face detection, ROC/DET, grid experiment)
- Thoughtful analysis of why raw pixels outperform LBP

### Areas for Improvement
- Use the optimal hyperparameters found during tuning for final model comparison
- Add cross-validation for more robust estimates
- Include more references (scikit-learn docs, LBP paper by Ojala et al., ATT dataset paper)
- Minor code cleanup (remove unused `n_bins` parameter, fix comment)
