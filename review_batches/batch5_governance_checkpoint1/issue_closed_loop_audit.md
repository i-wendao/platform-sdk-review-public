# Issue Closed Loop Audit

| issue | description | current evidence | status | required action |
|---|---|---|---|---|
| ISSUE-B5-003 patch path prefix error | Patch created top-level `shopee_ts/` instead of `adapters/shopee_ts/` | `runtime/logs/batch5_issue_closed_loop_backfill.md`; `review_queue/batch5_13R2_path_repair/`; `review_queue/batch5_13R3_standard_patch/root_cause.md` | PARTIAL | Update issue with final R3 root cause and skeleton commit |
| ISSUE-B5-004 public grep false positive for policy docs | Public sanitization flagged policy examples such as private key markers | `review_queue/batch5_GH_PUBLIC2R/` | NEEDS_UPDATE | Add formal Issue Closed Loop entry |
| ISSUE-B5-005 GitHub private visibility mismatch | GitHub private/public review split needed explicit source-of-truth rules | `review_queue/batch5_GH_PUBLIC1/`, public mirror records | NEEDS_UPDATE | Add Issue/Decision record if treated as governance incident |
| ISSUE-B5-006 git push did not use dedicated SSH key | Direct `git push` failed until one-time `GIT_SSH_COMMAND` was used | conversation execution record; no formal runtime issue found | NEEDS_UPDATE | Add issue record or closure note |
| ISSUE-B5-007 corrected patch missing a/b git header | R2 corrected patch still applied to wrong path because diff header lacked `a/` and `b/` | `review_queue/batch5_13R3_standard_patch/root_cause.md` | NEEDS_UPDATE | Add formal Issue Closed Loop entry |

## Finding

Issue tracking exists for earlier B5 failures, but the newer public mirror, SSH, and standard patch header incidents require formal closed-loop updates before claiming complete v6 governance closure.
