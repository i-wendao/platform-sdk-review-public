# RAG Snapshot Proposed Backfill

Proposed RAG snapshot topics for a future formal runtime write.

## GH/public mirror setup

Relevant inputs:

- `review_queue/batch5_GH_PUBLIC1/`
- `review_queue/batch5_GH_PUBLIC2R/`
- `/opt/project/sdk_public_review/mapping/private_to_public_commit_map.md`

Finding: public mirror is a sanitized review mirror only; private repo remains source of truth.

## 5.13R3 standard patch header repair

Relevant inputs:

- `review_queue/batch5_13R2_path_repair/`
- `review_queue/batch5_13R3_standard_patch/`
- commits `9798b7f`, `9d0a2b1`, `ea86412`

Finding: path safety requires standard `a/` and `b/` patch headers plus temporary directory apply validation.

## 5.14 skeleton static review

Relevant inputs:

- `adapters/shopee_ts/src/sdk_boundary.ts`
- `adapters/shopee_ts/src/output_contract.ts`
- `adapters/shopee_ts/src/adapter_candidate.ts`
- `review_queue/batch5_14_skeleton_static_review/`
- commit `c5ba363`

Finding: skeleton files remain static candidate/boundary code; no SDK/API execution was performed.

## TOKEN_EFFICIENCY_POLICY

Relevant inputs:

- `docs/TOKEN_EFFICIENCY_POLICY.md`
- commit `d117e36`

Finding: Tier 1/2/3 reduces repeated prompt overhead without weakening safety boundaries.

## AUDIT_SCRIPT_POLICY

Relevant inputs:

- `docs/AUDIT_SCRIPT_POLICY.md`
- commit `8be85d6`

Finding: future audit scripts are planned only until reviewed; Codex must not run planned/draft scripts.

## Governance checkpoint cadence

Relevant inputs:

- `review_queue/batch5_governance_checkpoint1/`
- commit `2aa8152`

Finding: every 3-5 low/medium-risk batches and before Tier 3, governance gaps should be reviewed.
