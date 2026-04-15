window.ExternalRepoManifest = {
  "generatedAt": "2026-04-15T00:09:37.752Z",
  "repository": {
    "name": "direction-aware-tda-for-porous-materials",
    "owner": "dioscuri-tda",
    "url": "https://github.com/dioscuri-tda/direction-aware-tda-for-porous-materials",
    "localPath": "paper-explorer/repos/direction-aware-tda-for-porous-materials",
    "head": "f62d7226920f610fc6b7ac69f05bd6c258d1271b",
    "branch": "main",
    "shallow": true,
    "workingTreeStatus": "clean"
  },
  "inventory": {
    "totalFiles": 8682,
    "topLevel": [
      ".gitattributes",
      ".gitignore",
      "Manifest.toml",
      "Project.toml",
      "README.md",
      "database",
      "header.png",
      "prepare_dataset_directional.sh",
      "prepare_dataset_nondirectional.sh",
      "run_catboost.sh",
      "run_nn.sh",
      "scripts",
      "structures"
    ],
    "extensionCounts": {
      "[none]": 2,
      "toml": 2,
      "md": 1,
      "csv": 8,
      "png": 1,
      "sh": 4,
      "py": 37,
      "jl": 1,
      "npy": 8626
    },
    "databaseCsvFiles": 8,
    "scriptFiles": 42
  },
  "databases": [
    {
      "path": "database/directional/rtp/database_both.csv",
      "descriptorKind": "directional",
      "datasetKey": "RTP",
      "exists": true,
      "bytes": 10809713,
      "sha256": "373bab14b4b4c57a8c7d3312ba1315623cb1dfa21aad72d2cce8e752ce1d6cb4",
      "rows": 1500,
      "columns": 646,
      "featureGroups": {
        "metadata": 3,
        "ecp": 343,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/rtp/0_axis-x.npy",
        "stress_axis": "x",
        "cii": "2.328679068909247"
      },
      "sampleRows": [
        {
          "npy_path": "structures/rtp/0_axis-x.npy",
          "stress_axis": "x",
          "cii": 2.328679068909247
        },
        {
          "npy_path": "structures/rtp/0_axis-y.npy",
          "stress_axis": "y",
          "cii": 2.577359829412942
        },
        {
          "npy_path": "structures/rtp/0_axis-z.npy",
          "stress_axis": "z",
          "cii": 5.229039353281512
        }
      ],
      "uniqueNpyPaths": 1500,
      "normalizedStructureCount": 500,
      "referencedFilesExist": 1500,
      "referencedFilesMissing": 0,
      "missingExamples": [],
      "targetStats": {
        "count": 1500,
        "min": 0.0091655057225508,
        "max": 6.15597407501686,
        "mean": 1.9499702437192603
      },
      "axisStats": [
        {
          "axis": "x",
          "count": 500,
          "min": 0.0091655057225508,
          "max": 4.002321972054263,
          "mean": 1.1463858470445965
        },
        {
          "axis": "y",
          "count": 500,
          "min": 0.0177080380010458,
          "max": 4.266411059360977,
          "mean": 1.1484570082008543
        },
        {
          "axis": "z",
          "count": 500,
          "min": 0.7078975991362882,
          "max": 6.15597407501686,
          "mean": 3.5550678759123344
        }
      ]
    },
    {
      "path": "database/directional/rtp/database_xy_both.csv",
      "descriptorKind": "directional",
      "datasetKey": "RTP",
      "exists": true,
      "bytes": 7176565,
      "sha256": "4033ab109d0a64bdfd55f5f1667e65fb0d8009af8e37e5148d5059e2f6b298ac",
      "rows": 1000,
      "columns": 646,
      "featureGroups": {
        "metadata": 3,
        "ecp": 343,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/rtp/0_axis-x.npy",
        "stress_axis": "x",
        "cii": "2.328679068909247"
      },
      "sampleRows": [
        {
          "npy_path": "structures/rtp/0_axis-x.npy",
          "stress_axis": "x",
          "cii": 2.328679068909247
        },
        {
          "npy_path": "structures/rtp/0_axis-y.npy",
          "stress_axis": "y",
          "cii": 2.577359829412942
        },
        {
          "npy_path": "structures/rtp/100_axis-x.npy",
          "stress_axis": "x",
          "cii": 3.011116950773943
        }
      ],
      "uniqueNpyPaths": 1000,
      "normalizedStructureCount": 500,
      "referencedFilesExist": 1000,
      "referencedFilesMissing": 0,
      "missingExamples": [],
      "targetStats": {
        "count": 1000,
        "min": 0.0091655057225508,
        "max": 4.266411059360977,
        "mean": 1.147421427622723
      },
      "axisStats": [
        {
          "axis": "x",
          "count": 500,
          "min": 0.0091655057225508,
          "max": 4.002321972054263,
          "mean": 1.1463858470445965
        },
        {
          "axis": "y",
          "count": 500,
          "min": 0.0177080380010458,
          "max": 4.266411059360977,
          "mean": 1.1484570082008543
        }
      ]
    },
    {
      "path": "database/directional/rtp/database_xz_both.csv",
      "descriptorKind": "directional",
      "datasetKey": "RTP",
      "exists": true,
      "bytes": 7173867,
      "sha256": "30ce0693523193b7a41eb2a210de1bec0873e2f7a1d428d616c48564d80293da",
      "rows": 1000,
      "columns": 646,
      "featureGroups": {
        "metadata": 3,
        "ecp": 343,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/rtp/0_axis-x.npy",
        "stress_axis": "x",
        "cii": "2.328679068909247"
      },
      "sampleRows": [
        {
          "npy_path": "structures/rtp/0_axis-x.npy",
          "stress_axis": "x",
          "cii": 2.328679068909247
        },
        {
          "npy_path": "structures/rtp/0_axis-z.npy",
          "stress_axis": "z",
          "cii": 5.229039353281512
        },
        {
          "npy_path": "structures/rtp/100_axis-x.npy",
          "stress_axis": "x",
          "cii": 3.011116950773943
        }
      ],
      "uniqueNpyPaths": 1000,
      "normalizedStructureCount": 500,
      "referencedFilesExist": 1000,
      "referencedFilesMissing": 0,
      "missingExamples": [],
      "targetStats": {
        "count": 1000,
        "min": 0.0091655057225508,
        "max": 6.15597407501686,
        "mean": 2.350726861478467
      },
      "axisStats": [
        {
          "axis": "x",
          "count": 500,
          "min": 0.0091655057225508,
          "max": 4.002321972054263,
          "mean": 1.1463858470445965
        },
        {
          "axis": "z",
          "count": 500,
          "min": 0.7078975991362882,
          "max": 6.15597407501686,
          "mean": 3.5550678759123344
        }
      ]
    },
    {
      "path": "database/directional/various_anisotropy/database_both.csv",
      "descriptorKind": "directional",
      "datasetKey": "ATTD",
      "exists": true,
      "bytes": 31588142,
      "sha256": "cdbdc9195bd2296476d3c61d6afdf1d346389051e27ac455d5d6086a30dc2412",
      "rows": 4770,
      "columns": 646,
      "featureGroups": {
        "metadata": 3,
        "ecp": 343,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-x.npy",
        "stress_axis": "x",
        "cii": "0.09446177889575093"
      },
      "sampleRows": [
        {
          "npy_path": "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-x.npy",
          "stress_axis": "x",
          "cii": 0.09446177889575093
        },
        {
          "npy_path": "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-z.npy",
          "stress_axis": "z",
          "cii": 0.11232398475936177
        },
        {
          "npy_path": "structures/various_anisotropy/VF=0.044357421875_time=20251121_140427_333348_stretch_axis-x.npy",
          "stress_axis": "x",
          "cii": 0.15300496683608308
        }
      ],
      "uniqueNpyPaths": 4770,
      "normalizedStructureCount": 2395,
      "referencedFilesExist": 4750,
      "referencedFilesMissing": 20,
      "missingExamples": [
        "structures/various_anisotropy/VF=0.078671875_time=20251120_161138_903038_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8161700_VF=0.0819140625_time=20250221_135010_681985_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8164300_VF=0.0881953125_time=20250124_112658_705347_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8177300_VF=0.083046875_time=20250221_135759_541377_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8186100_VF=0.12890625_time=20250221_134158_465246_stretch_axis-z.npy"
      ],
      "targetStats": {
        "count": 4770,
        "min": 0.003206370294502458,
        "max": 5.453395307259237,
        "mean": 0.9363656074467821
      },
      "axisStats": [
        {
          "axis": "x",
          "count": 2375,
          "min": 0.003206370294502458,
          "max": 4.828636695287886,
          "mean": 0.6797099825488033
        },
        {
          "axis": "z",
          "count": 2395,
          "min": 0.02558920807447875,
          "max": 5.453395307259237,
          "mean": 1.1908779703414356
        }
      ]
    },
    {
      "path": "database/directional/various_isotropy/database_both.csv",
      "descriptorKind": "directional",
      "datasetKey": "TD",
      "exists": true,
      "bytes": 14981375,
      "sha256": "d11c8badad70fd00c2e033699075af210ad0ce1e9c73ce926d247d847dad528a",
      "rows": 2375,
      "columns": 646,
      "featureGroups": {
        "metadata": 3,
        "ecp": 343,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/various_isotropy/VF=0.0288515625_time=20251121_150056_380550.npy",
        "stress_axis": "z",
        "cii": "0.0793475279997906"
      },
      "sampleRows": [
        {
          "npy_path": "structures/various_isotropy/VF=0.0288515625_time=20251121_150056_380550.npy",
          "stress_axis": "z",
          "cii": 0.0793475279997906
        },
        {
          "npy_path": "structures/various_isotropy/VF=0.04562109375_time=20251121_150927_842619.npy",
          "stress_axis": "z",
          "cii": 0.1305449577463251
        },
        {
          "npy_path": "structures/various_isotropy/VF=0.04622265625_time=20251121_144735_013723.npy",
          "stress_axis": "z",
          "cii": 0.1318575954330217
        }
      ],
      "uniqueNpyPaths": 2375,
      "normalizedStructureCount": 2375,
      "referencedFilesExist": 2375,
      "referencedFilesMissing": 0,
      "missingExamples": [],
      "targetStats": {
        "count": 2375,
        "min": 0.008009658578371,
        "max": 4.506942269069561,
        "mean": 0.7446588396122263
      },
      "axisStats": [
        {
          "axis": "z",
          "count": 2375,
          "min": 0.008009658578371,
          "max": 4.506942269069561,
          "mean": 0.7446588396122263
        }
      ]
    },
    {
      "path": "database/undirectional/rtp/database_both.csv",
      "descriptorKind": "undirectional",
      "datasetKey": "RTP",
      "exists": true,
      "bytes": 8010576,
      "sha256": "44d105b4d8f7e310c6f1af810f16f6113d3824828f1e0d5416efeb60a2a07075",
      "rows": 1500,
      "columns": 333,
      "featureGroups": {
        "metadata": 3,
        "ecp": 30,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/rtp/0_axis-x.npy",
        "stress_axis": "x",
        "cii": "2.328679068909247"
      },
      "sampleRows": [
        {
          "npy_path": "structures/rtp/0_axis-x.npy",
          "stress_axis": "x",
          "cii": 2.328679068909247
        },
        {
          "npy_path": "structures/rtp/0_axis-y.npy",
          "stress_axis": "y",
          "cii": 2.577359829412942
        },
        {
          "npy_path": "structures/rtp/0_axis-z.npy",
          "stress_axis": "z",
          "cii": 5.229039353281512
        }
      ],
      "uniqueNpyPaths": 1500,
      "normalizedStructureCount": 500,
      "referencedFilesExist": 1500,
      "referencedFilesMissing": 0,
      "missingExamples": [],
      "targetStats": {
        "count": 1500,
        "min": 0.0091655057225508,
        "max": 6.15597407501686,
        "mean": 1.9499702437192603
      },
      "axisStats": [
        {
          "axis": "x",
          "count": 500,
          "min": 0.0091655057225508,
          "max": 4.002321972054263,
          "mean": 1.1463858470445965
        },
        {
          "axis": "y",
          "count": 500,
          "min": 0.0177080380010458,
          "max": 4.266411059360977,
          "mean": 1.1484570082008543
        },
        {
          "axis": "z",
          "count": 500,
          "min": 0.7078975991362882,
          "max": 6.15597407501686,
          "mean": 3.5550678759123344
        }
      ]
    },
    {
      "path": "database/undirectional/various_anisotropy/database_both.csv",
      "descriptorKind": "undirectional",
      "datasetKey": "ATTD",
      "exists": true,
      "bytes": 24395530,
      "sha256": "83dd326a04b3d1c7a57b4df23188eeb229909570333c2d5a1342de9590674036",
      "rows": 4770,
      "columns": 333,
      "featureGroups": {
        "metadata": 3,
        "ecp": 30,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-x.npy",
        "stress_axis": "x",
        "cii": "0.09446177889575093"
      },
      "sampleRows": [
        {
          "npy_path": "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-x.npy",
          "stress_axis": "x",
          "cii": 0.09446177889575093
        },
        {
          "npy_path": "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-z.npy",
          "stress_axis": "z",
          "cii": 0.11232398475936177
        },
        {
          "npy_path": "structures/various_anisotropy/VF=0.044357421875_time=20251121_140427_333348_stretch_axis-x.npy",
          "stress_axis": "x",
          "cii": 0.15300496683608308
        }
      ],
      "uniqueNpyPaths": 4770,
      "normalizedStructureCount": 2395,
      "referencedFilesExist": 4750,
      "referencedFilesMissing": 20,
      "missingExamples": [
        "structures/various_anisotropy/VF=0.078671875_time=20251120_161138_903038_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8161700_VF=0.0819140625_time=20250221_135010_681985_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8164300_VF=0.0881953125_time=20250124_112658_705347_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8177300_VF=0.083046875_time=20250221_135759_541377_stretch_axis-z.npy",
        "structures/various_anisotropy/file_number=8186100_VF=0.12890625_time=20250221_134158_465246_stretch_axis-z.npy"
      ],
      "targetStats": {
        "count": 4770,
        "min": 0.003206370294502458,
        "max": 5.453395307259237,
        "mean": 0.9363656074467821
      },
      "axisStats": [
        {
          "axis": "x",
          "count": 2375,
          "min": 0.003206370294502458,
          "max": 4.828636695287886,
          "mean": 0.6797099825488033
        },
        {
          "axis": "z",
          "count": 2395,
          "min": 0.02558920807447875,
          "max": 5.453395307259237,
          "mean": 1.1908779703414356
        }
      ]
    },
    {
      "path": "database/undirectional/various_isotropy/database_both.csv",
      "descriptorKind": "undirectional",
      "datasetKey": "TD",
      "exists": true,
      "bytes": 12163164,
      "sha256": "87eaabf533abc88c2788584d76b1843f7d92100957dda8af532a5502e2db931f",
      "rows": 2375,
      "columns": 333,
      "featureGroups": {
        "metadata": 3,
        "ecp": 30,
        "phCone": 300
      },
      "metadataColumns": [
        "npy_path",
        "stress_axis",
        "cii"
      ],
      "firstRowPreview": {
        "npy_path": "structures/various_isotropy/VF=0.0288515625_time=20251121_150056_380550.npy",
        "stress_axis": "z",
        "cii": "0.0793475279997906"
      },
      "sampleRows": [
        {
          "npy_path": "structures/various_isotropy/VF=0.0288515625_time=20251121_150056_380550.npy",
          "stress_axis": "z",
          "cii": 0.0793475279997906
        },
        {
          "npy_path": "structures/various_isotropy/VF=0.04562109375_time=20251121_150927_842619.npy",
          "stress_axis": "z",
          "cii": 0.1305449577463251
        },
        {
          "npy_path": "structures/various_isotropy/VF=0.04622265625_time=20251121_144735_013723.npy",
          "stress_axis": "z",
          "cii": 0.1318575954330217
        }
      ],
      "uniqueNpyPaths": 2375,
      "normalizedStructureCount": 2375,
      "referencedFilesExist": 2375,
      "referencedFilesMissing": 0,
      "missingExamples": [],
      "targetStats": {
        "count": 2375,
        "min": 0.008009658578371,
        "max": 4.506942269069561,
        "mean": 0.7446588396122263
      },
      "axisStats": [
        {
          "axis": "z",
          "count": 2375,
          "min": 0.008009658578371,
          "max": 4.506942269069561,
          "mean": 0.7446588396122263
        }
      ]
    }
  ],
  "expectedDatabaseStatus": [
    {
      "path": "database/directional/rtp/database_both.csv",
      "exists": true
    },
    {
      "path": "database/directional/rtp/database_xy_both.csv",
      "exists": true
    },
    {
      "path": "database/directional/rtp/database_xz_both.csv",
      "exists": true
    },
    {
      "path": "database/directional/various_isotropy/database_both.csv",
      "exists": true
    },
    {
      "path": "database/directional/various_anisotropy/database_both.csv",
      "exists": true
    },
    {
      "path": "database/undirectional/rtp/database_both.csv",
      "exists": true
    },
    {
      "path": "database/undirectional/rtp/database_xy_both.csv",
      "exists": false
    },
    {
      "path": "database/undirectional/rtp/database_xz_both.csv",
      "exists": false
    },
    {
      "path": "database/undirectional/various_isotropy/database_both.csv",
      "exists": true
    },
    {
      "path": "database/undirectional/various_anisotropy/database_both.csv",
      "exists": true
    }
  ],
  "structures": {
    "totalNpyFiles": 8626,
    "lfsPointers": 8626,
    "materialized": 0,
    "byDataset": [
      {
        "dataset": "rtp",
        "files": 1500,
        "lfsPointers": 1500,
        "materialized": 0,
        "exampleFiles": [
          "structures/rtp/0_axis-x.npy",
          "structures/rtp/0_axis-y.npy",
          "structures/rtp/0_axis-z.npy",
          "structures/rtp/100_axis-x.npy",
          "structures/rtp/100_axis-y.npy",
          "structures/rtp/100_axis-z.npy"
        ]
      },
      {
        "dataset": "various_anisotropy",
        "files": 4750,
        "lfsPointers": 4750,
        "materialized": 0,
        "exampleFiles": [
          "structures/various_anisotropy/VF=0.02175_time=20251120_171900_903540_stretch_axis-x.npy",
          "structures/various_anisotropy/VF=0.02175_time=20251120_171900_903540_stretch_axis-z.npy",
          "structures/various_anisotropy/VF=0.022986328125_time=20251120_161649_066218_stretch_axis-x.npy",
          "structures/various_anisotropy/VF=0.022986328125_time=20251120_161649_066218_stretch_axis-z.npy",
          "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-x.npy",
          "structures/various_anisotropy/VF=0.0288515625_time=20251121_150056_380550_stretch_axis-z.npy"
        ]
      },
      {
        "dataset": "various_isotropy",
        "files": 2376,
        "lfsPointers": 2376,
        "materialized": 0,
        "exampleFiles": [
          "structures/various_isotropy/VF=0.02175_time=20251120_171900_903540.npy",
          "structures/various_isotropy/VF=0.022986328125_time=20251120_161649_066218.npy",
          "structures/various_isotropy/VF=0.0288515625_time=20251121_150056_380550.npy",
          "structures/various_isotropy/VF=0.035603515625_time=20251120_171754_978781.npy",
          "structures/various_isotropy/VF=0.035794921875_time=20251120_161442_603943.npy",
          "structures/various_isotropy/VF=0.035859375_time=20251120_161030_088388.npy"
        ]
      }
    ]
  },
  "scripts": [
    {
      "path": "prepare_dataset_directional.sh",
      "class": "shell workflow"
    },
    {
      "path": "prepare_dataset_nondirectional.sh",
      "class": "shell workflow"
    },
    {
      "path": "run_catboost.sh",
      "class": "shell workflow"
    },
    {
      "path": "run_nn.sh",
      "class": "shell workflow"
    },
    {
      "path": "scripts/directional_ecp.jl",
      "class": "Euler characteristic"
    },
    {
      "path": "scripts/directional_multifiltration.py",
      "class": "filtration"
    },
    {
      "path": "scripts/distance_transfrom_nondirect.py",
      "class": "filtration"
    },
    {
      "path": "scripts/eulercurves_calc.py",
      "class": "Euler characteristic"
    },
    {
      "path": "scripts/npy_to_vtk.py",
      "class": "visualization conversion"
    },
    {
      "path": "scripts/ph_calc.py",
      "class": "persistent homology"
    },
    {
      "path": "scripts/src/data.py",
      "class": "support"
    },
    {
      "path": "scripts/src/filtrations/init.py",
      "class": "filtration"
    },
    {
      "path": "scripts/src/filtrations/pipeline.py",
      "class": "filtration"
    },
    {
      "path": "scripts/src/filtrations/speed.py",
      "class": "filtration"
    },
    {
      "path": "scripts/src/generate_model.py",
      "class": "support"
    },
    {
      "path": "scripts/src/inputoutput.py",
      "class": "support"
    },
    {
      "path": "scripts/src/training.py",
      "class": "support"
    },
    {
      "path": "scripts/src/utils.py",
      "class": "support"
    },
    {
      "path": "scripts/src/validation.py",
      "class": "support"
    },
    {
      "path": "scripts/train_catboost.py",
      "class": "CatBoost training"
    },
    {
      "path": "scripts/train_nn.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/generate_model.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/C3DNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/cnn.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/DenseNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/EfficientNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/generate_model.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/MobileNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/MobileNetV2.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/PreActResNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/resnet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/ResNet2p1d.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/ResNet3D_Keras.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/ResNetV2.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/ResNeXt.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/ResNeXtV2.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/ShuffleNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/ShuffleNetV2.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/SqueezeNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/utils.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/models/WideResNet.py",
      "class": "neural network training"
    },
    {
      "path": "scripts/TRIDCNNPyTorch/opts.py",
      "class": "neural network training"
    }
  ],
  "notes": [
    "The structures directory is tracked with Git LFS in the external repository.",
    "The current clone contains LFS pointer files for structures, not materialized 80x80x80 arrays.",
    "Run `git lfs pull` inside the external repository if full voxel previews are required.",
    "The repository uses `undirectional` in paths while the manuscript and README use `non-directional`/`nondirectional` wording."
  ]
};
