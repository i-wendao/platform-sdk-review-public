# Decision Log Audit

| decision | expected record | current evidence | status | required action |
|---|---|---|---|---|
| Dual repository strategy | Private source of truth + public sanitized review mirror | `review_queue/batch5_GH_PUBLIC1/`, public repo mapping | NEEDS_UPDATE | Add to `docs/DECISION_LOG.md` |
| Token efficiency Tier 1/2/3 | Formal policy and decision context | `docs/TOKEN_EFFICIENCY_POLICY.md` | NEEDS_UPDATE | Add decision entry referencing `d117e36` |
| Audit script governance | Planned/draft/reviewed/deprecated statuses | `docs/AUDIT_SCRIPT_POLICY.md` | NEEDS_UPDATE | Add decision entry referencing `8be85d6` |
| SDK adapter skeleton as static candidate only | Skeleton committed, no SDK/API run | `ea86412`, `review_queue/batch5_14_skeleton_static_review/` | NEEDS_UPDATE | Add decision entry |
| Public mirror whitelist only, no reverse merge | Public policy exists | `review_queue/batch5_GH_PUBLIC1/`, `review_queue/batch5_GH_PUBLIC2R/` | NEEDS_UPDATE | Add decision entry |

## Finding

`docs/DECISION_LOG.md` appears to contain early architecture decisions, but does not yet reflect the recent GitHub, public mirror, Tier, audit script, and adapter skeleton governance decisions.
