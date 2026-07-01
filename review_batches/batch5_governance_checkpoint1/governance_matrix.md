# Governance Matrix

| governance_item | expected_evidence | current_evidence | status | gap | required_action |
|---|---|---|---|---|---|
| AGENTS / CLAUDE / README project entry rules | Entry docs exist and are used as active context | `AGENTS.md`, `CLAUDE.md`, `README.md` exist | PASS | None for existence | Keep reading them in Tier 2/3 batches |
| AI_LONG_PROJECT_RULES | v6 enhanced baseline exists | `docs/AI_LONG_PROJECT_RULES.md` exists | PASS | None for baseline | Keep as top-level governance source |
| LONG_PROJECT_WORKFLOW | Batch lifecycle and review queue rules documented | `docs/LONG_PROJECT_WORKFLOW.md` exists and mentions review_queue | PASS | Recent public mirror/Tier policy not fully reflected | Consider small update after checkpoint review |
| PROJECT_MAP | New directories and docs mapped | `docs/PROJECT_MAP.md` exists | NEEDS_UPDATE | Missing `/opt/project/sdk_public_review`, token/audit policies, recent review packages | Add map update in later approved batch |
| DECISION_LOG | Key project decisions recorded | `docs/DECISION_LOG.md` exists | NEEDS_UPDATE | Recent GitHub/public mirror/Tier/audit/skeleton decisions not recorded | Add decision log patch after review |
| CODEX_EXECUTION_CHECKLIST | Codex execution checklist exists | `docs/CODEX_EXECUTION_CHECKLIST.md` exists | PARTIAL | New Tier policy and audit script policy not referenced | Update checklist later if approved |
| HARNESS_POLICY | Harness boundaries defined | `docs/HARNESS_POLICY.md` exists | PASS | No immediate gap | Continue enforcing stop-on-conflict |
| RAG_RETRIEVAL_POLICY | RAG rules and snapshot path defined | `docs/RAG_RETRIEVAL_POLICY.md` exists | PASS | Recent RAG snapshots missing for 5.13R3/5.14/policies | Add backfill plan |
| QUALITY_MODE_POLICY | Quality mode rules exist | `docs/QUALITY_MODE_POLICY.md` exists | PASS | Tier 1/2/3 is separate but related | Cross-reference later if needed |
| KNOWLEDGE_PERSISTENCE_POLICY | Closure-to-knowledge flow exists | `docs/KNOWLEDGE_PERSISTENCE_POLICY.md` exists | PASS | Recent knowledge persistence not assessed | Include in next closure backfill |
| CONTEXT_INJECTION_POLICY | Context injection rules exist | `docs/CONTEXT_INJECTION_POLICY.md` exists | PASS | No immediate gap | Continue active context discipline |
| ROLE_DISPATCH_POLICY | ChatGPT/Codex/Harness/RAG roles defined | `docs/ROLE_DISPATCH_POLICY.md` exists | PASS | Public mirror role not fully reflected | Consider role update later |
| ISSUE_CLOSED_LOOP | Issue loop rules exist | `docs/ISSUE_CLOSED_LOOP.md` exists | PARTIAL | Existing issue backfill covers B5-001 to B5-003, not B5-004 to B5-007 | Add issue loop update |
| BATCH_LIFECYCLE | Batch lifecycle states exist | `docs/BATCH_LIFECYCLE.md` exists | PASS | No immediate gap | Continue following lifecycle |
| CLOSURE_TEMPLATE | Closure template exists | `docs/CLOSURE_TEMPLATE.md` exists | PASS | Recent closures missing | Use template for backfill |
| SMALL_BATCH_PLAN_TEMPLATE | Small batch plan template exists | `docs/SMALL_BATCH_PLAN_TEMPLATE.md` exists | PASS | New Tier wording not reflected | Optional template update |
| TOKEN_EFFICIENCY_POLICY | Tier 1/2/3 policy exists | `docs/TOKEN_EFFICIENCY_POLICY.md`, commit `d117e36` | PASS | New policy may need project map/decision record | Add Decision/Project Map references |
| AUDIT_SCRIPT_POLICY | Audit script governance exists | `docs/AUDIT_SCRIPT_POLICY.md`, commit `8be85d6` | PASS | Policy exists; no scripts created | Keep planned scripts unexecuted until reviewed |
| public review mirror rules | Public mirror plan and sanitization repair exist | `review_queue/batch5_GH_PUBLIC1/`, `review_queue/batch5_GH_PUBLIC2R/`, public commits exist | PASS | Formal docs/Decision Log need update | Add decision and map update |
| private/public commit mapping | Mapping exists in public mirror and GH docs | `/opt/project/sdk_public_review/mapping/private_to_public_commit_map.md`, GH_PUBLIC1 docs | PASS | Private project map/decision does not fully reference mapping | Add formal references later |

## Status Counts

- PASS: 16
- PARTIAL: 2
- MISSING: 0
- NEEDS_UPDATE: 2
