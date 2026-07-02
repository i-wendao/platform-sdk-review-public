# Batch Evidence Matrix

| Batch | Private commit | Evidence / review package | Public commit if any | Status | Closure needed? |
| --- | --- | --- | --- | --- | --- |
| `batch5_shopee_ts_adapter_patch_draft1` | `70717df` | draft review package, reverse review result, no-runtime attestation | `fbb2cd2` | closed | no |
| `batch5_shopee_ts_adapter_patch_audit_gate1` | `51d58a2` | audit gate result | none | closed | no |
| `batch5_shopee_ts_adapter_patch_apply1` | `3ce17c2` | apply result, typecheck result, no-runtime attestation | none | closed | yes, closure written in next commit chain item |
| `batch5_shopee_ts_adapter_patch_apply1_review_package1` | `4511ba4` | apply review package, diff evidence, typecheck evidence | none | archived | no |
| `batch5_shopee_ts_adapter_patch_apply1_public_export1` | `69318ae` | public export evidence | `b6dde65` | closed | no |
| `batch5_shopee_ts_adapter_patch_apply_closure1` | `123edfd` | final closure | none | closed | no |
| `batch5_token_policy_audit_gate1` | `0c1d44d` | policy audit gate review package | `20a6b0a` | closed | no |
| `batch5_model_effort_reporting_policy_simplify1` | `b9f1bff` | policy change summary and no-runtime attestation | none | closed | no |

## Interpretation

The adapter patch cycle is closed at the evidence layer. The only remaining unknown is runtime/API/auth/sandbox validation, which was never in scope for this chain.

