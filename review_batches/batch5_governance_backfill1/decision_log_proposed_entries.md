# Decision Log Proposed Entries

Proposed entries for `docs/DECISION_LOG.md`.

## 1. Private source of truth + public sanitized review mirror

Decision: `/opt/project/sdk` remains the private source of truth. `/opt/project/sdk_public_review` is only a public sanitized review mirror for ChatGPT review.

Evidence: `review_queue/batch5_GH_PUBLIC1/`, public mirror commits, private branch `review/batch5-sdk-adapter`.

## 2. Private -> public one-way whitelist export

Decision: public mirror receives only explicit whitelist exports from private. Public repo must not be merged back into private and does not replace Closure/RAG/Issue/Decision records.

Evidence: `review_queue/batch5_GH_PUBLIC1/private_to_public_sync_policy.md`, `review_queue/batch5_GH_PUBLIC2R/`.

## 3. Tier 1 / Tier 2 / Tier 3 token efficiency execution model

Decision: Future batches should name Tier 1, Tier 2, or Tier 3 instead of undefined shorthand. Efficiency rules do not override safety boundaries.

Evidence: `docs/TOKEN_EFFICIENCY_POLICY.md`, commit `d117e36`.

## 4. Audit script governance statuses

Decision: Future audit scripts under `scripts/audit/` are governed by `planned`, `draft`, `reviewed`, and `deprecated` statuses. Codex must not run planned or draft scripts.

Evidence: `docs/AUDIT_SCRIPT_POLICY.md`, commit `8be85d6`.

## 5. Shopee TS SDK adapter skeleton remains static candidate only

Decision: The committed Shopee TS SDK adapter skeleton is static candidate/boundary/output contract code only. It does not imply SDK/API validation and must not be treated as ready for platform calls.

Evidence: `ea86412`, `review_queue/batch5_14_skeleton_static_review/`, public mirror static review PASS.

## 6. Patch header and landing verification rule

Decision: Patches that create files must use standard `diff --git a/... b/...` headers and must be verified in a temporary directory when path risk exists. `git apply --check` alone is insufficient for path landing validation.

Evidence: `review_queue/batch5_13R3_standard_patch/root_cause.md`, `temp_apply_status.txt`, commits `9798b7f`, `9d0a2b1`, `ea86412`.

## Count

Proposed decision entries: 6
