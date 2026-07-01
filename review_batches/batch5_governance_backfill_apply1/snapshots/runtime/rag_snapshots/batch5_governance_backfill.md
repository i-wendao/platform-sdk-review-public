# RAG Snapshot：batch5_governance_backfill

## 1. 本批目标

补写 Batch 5 后半段治理事实，覆盖 GitHub/public mirror、patch header 修复、skeleton static review、Token Efficiency、Audit Script Policy 与治理 checkpoint cadence。

## 2. 检索范围

- `docs/DECISION_LOG.md`
- `docs/PROJECT_MAP.md`
- `docs/TOKEN_EFFICIENCY_POLICY.md`
- `docs/AUDIT_SCRIPT_POLICY.md`
- `review_queue/batch5_GH_PUBLIC1/`
- `review_queue/batch5_GH_PUBLIC2R/`
- `review_queue/batch5_13R3_standard_patch/`
- `review_queue/batch5_14_skeleton_static_review/`
- `review_queue/batch5_governance_checkpoint1/`
- `review_queue/batch5_governance_backfill1/`
- existing `runtime/closures/`, `runtime/logs/`, `runtime/rag_snapshots/`

## 3. 关键事实

### GH/public mirror setup

- Private repo `/opt/project/sdk` remains source of truth.
- Public mirror `/opt/project/sdk_public_review` is a sanitized review mirror only.
- Public mirror uses private -> public whitelist export and must not be reverse-merged.

### 5.13R3 standard patch header repair

- R2 path repair still lacked standard `a/` / `b/` patch headers.
- `git apply --check` alone did not catch final landing path risk.
- R3 standard patch used `diff --git a/adapters/... b/adapters/...` and temporary directory real apply verification.

### 5.14 skeleton static review

- Skeleton files committed in `ea86412`:
  - `adapters/shopee_ts/src/sdk_boundary.ts`
  - `adapters/shopee_ts/src/output_contract.ts`
  - `adapters/shopee_ts/src/adapter_candidate.ts`
- Static review package `review_queue/batch5_14_skeleton_static_review/` passed ChatGPT review through public mirror.
- No SDK/API/test/auth/sandbox/database execution was performed.

### TOKEN_EFFICIENCY_POLICY

- `docs/TOKEN_EFFICIENCY_POLICY.md` defines Tier 1 / Tier 2 / Tier 3 execution compression.
- Token efficiency does not override safety boundaries.

### AUDIT_SCRIPT_POLICY

- `docs/AUDIT_SCRIPT_POLICY.md` defines planned / draft / reviewed / deprecated audit script governance.
- No `scripts/audit/*.sh` script is approved merely by being planned.

### Governance checkpoint cadence

- Every 3-5 low/medium-risk batches should generate a governance checkpoint for ChatGPT review.
- Before Tier 3 work, current governance gaps must be checked.
- Stop/failure/rollback events must enter Issue Closed Loop audit.

## 4. Exclusions

This RAG snapshot does not include secret values, `.env`, API response originals, DB/raw/staging/DWD/mart data, or platform business evidence.
