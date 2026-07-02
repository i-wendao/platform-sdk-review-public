# Private to Public Commit Map

private_repo: git@github.com:i-wendao/platform-sdk-ingestion.git
public_repo: git@github.com:i-wendao/platform-sdk-review-public.git

private_branch_at_export: review/batch5-sdk-adapter
public_branch: review/batch5-sdk-adapter

private_latest_commit_at_export: 0e0541d

exported_batches:
- batch5_GH_PUBLIC1
- batch5_GH_PUBLIC2R

notes:
- Public repo is a sanitized review mirror only.
- Private repo remains the source of truth.
- Public repo must not be merged back into private repo.

- batch: batch5_13R2_path_repair
  private_base_commit: 0e0541d
  private_state: uncommitted_review_package
  public_export_reason: ChatGPT review of corrected adapter skeleton patch path repair

- batch: batch5_13R3_standard_patch
  private_base_commit: 9798b7f
  private_state: uncommitted_review_package
  public_export_reason: ChatGPT review of standard patch header and temp apply landing verification

- batch: batch5_14_skeleton_static_review
  private_base_commit: 8be85d6
  private_state: uncommitted_review_package
  public_export_reason: ChatGPT static review of Shopee TS SDK adapter skeleton files

- batch: batch5_governance_checkpoint1
  private_base_commit: c5ba363
  private_state: uncommitted_governance_checkpoint
  public_export_reason: ChatGPT review of v6 governance checkpoint, gaps, cadence, and public sync safety

- batch: batch5_governance_backfill1
  private_base_commit: 2aa8152
  private_state: uncommitted_governance_backfill_proposal
  public_export_reason: ChatGPT strict review of proposed governance backfill for Decision Log, Project Map, Issue Closed Loop, RAG, and Closure

- batch: batch5_governance_backfill_apply1
  private_base_commit: c627b35
  private_state: uncommitted_governance_backfill_apply_diff
  public_export_reason: ChatGPT review of Decision Log, Project Map, Issue, RAG, and Closure backfill diff before private commit

- batch: batch5_audit_script_preflight_draft1
  private_base_commit: df8f253
  private_state: uncommitted_draft_audit_script
  public_export_reason: ChatGPT review of draft read-only git preflight audit script before reviewed status

- batch: batch5_audit_script_preflight_draft1R
  private_base_commit: df8f253
  private_state: uncommitted_draft_audit_script_format_repair
  public_export_reason: ChatGPT re-review of multi-line formatted draft read-only git preflight audit script

- batch: batch5_audit_script_preflight_draft1R3
  private_base_commit: df8f253
  private_state: uncommitted_draft_audit_script_format_repair_r3
  public_export_reason: ChatGPT re-review of regenerated multi-line draft preflight audit script with line structure evidence

- batch: batch5_audit_script_preflight_draft1_DIAG1
  private_base_commit: df8f253
  private_state: uncommitted_draft_audit_script_line_diagnosis
  public_export_reason: ChatGPT diagnosis of apparent line structure mismatch between public raw view and local evidence

- batch: batch5_audit_script_preflight_reverse_review1
  private_base_commit: df8f253
  private_state: uncommitted_codex_reverse_review_result
  public_export_reason: ChatGPT review of Codex reverse review result for draft preflight audit script

- batch: batch5_shopee_ts_static_check1
  private_base_commit: 1657d84
  private_state: uncommitted_package_toolchain_and_static_check_evidence
  public_export_reason: ChatGPT review of TypeScript toolchain addition and no-emit PASS before private commit

- batch: batch5_token_model_policy_merge1
  private_base_commit: 1657d84
  private_state: uncommitted_token_efficiency_policy_model_reasoning_merge
  public_export_reason: ChatGPT review of merged token/model/reasoning policy before private commit

- batch: batch5_token_policy_audit_gate1
  private_base_commit: 52265ca
  private_state: uncommitted_token_efficiency_policy_audit_gate_update
  public_export_reason: ChatGPT review of Audit Gate policy before private commit

- batch: batch5_shopee_ts_adapter_patch_draft1
  private_base_commit: 51d58a2
  private_state: uncommitted_patch_draft_review_package_only
  public_export_reason: ChatGPT review of Shopee TS adapter patch draft before any source apply

- batch: batch5_shopee_ts_adapter_patch_apply1
  private_base_commit: 3ce17c2
  private_state: applied_source_and_review_package
  public_export_reason: ChatGPT review of patch apply result and static no-emit evidence

- batch: batch5_governance_rollup_public_audit1
  private_base_commit: e305727
  private_state: uncommitted_governance_rollup_public_audit
  public_export_reason: ChatGPT review of governance rollup from 70717df to 123edfd before private commit

- batch: batch6_governance_v7_consolidation1
  private_base_commit: 712949b
  private_state: uncommitted_governance_v7_public_export_evidence
  public_export_reason: ChatGPT review of governance V7 consolidation before private export evidence commit

- batch: batch6_governance_v7_early_rules_coverage_audit1
  private_base_commit: 3d922fb
  private_state: uncommitted_governance_v7_early_rules_coverage_audit_evidence
  public_export_reason: ChatGPT review of governance V7 coverage of early long-project rules

- batch: batch6_governance_v7_external_watch_reference_rule1
  private_base_commit: 577c3f5
  private_state: uncommitted_governance_v7_external_watch_reference_rule_evidence
  public_export_reason: ChatGPT review of governance V7 external watch reference rule before private export evidence commit

- batch: batch6_governance_v7_external_watch_joint_decision_rule1
  private_base_commit: fb228e9
  private_state: uncommitted_governance_v7_external_watch_joint_decision_rule_evidence
  public_export_reason: ChatGPT review of governance V7 external watch joint decision rule before private export evidence commit

- batch: batch6_governance_rollup_public_audit2
  private_base_commit: 1d5a229
  private_state: uncommitted_governance_rollup_public_audit
  public_export_reason: ChatGPT review of governance rollup from 712949b through 1d5a229, covering V7 consolidation, early rules coverage, and external watch rules

- batch: batch6_shopee_ts_adapter_type_only_cleanup_apply1
  private_base_commit: e30634b
  private_state: uncommitted_type_only_cleanup_apply_review_evidence
  public_export_reason: ChatGPT review of Shopee TS adapter type-only cleanup apply evidence before private export commit

- batch: batch6_shopee_ts_adapter_type_only_cleanup_closure_rollup1
  private_base_commit: 5ee618c
  private_state: uncommitted_type_only_cleanup_closure_rollup_evidence
  public_export_reason: ChatGPT review of Shopee TS adapter type-only cleanup closure and governance rollup after public apply audit PASS

- batch: batch6_shopee_ts_adapter_final_static_closure_runtime_gate_design1
  private_base_commit: 6b32d97
  private_state: uncommitted_final_static_closure_runtime_gate_public_export
  public_export_reason: ChatGPT review of Shopee TS adapter final static closure and runtime gate design before private export evidence commit

- batch: batch6_public_export_remote_truth_check_rule1
  private_base_commit: f429054
  private_state: uncommitted_public_export_remote_truth_check_rule_evidence
  public_export_reason: ChatGPT review of public export remote truth check rule before private export evidence commit

- batch: batch6_shopee_ts_adapter_tier3_import_only_execution1
  private_base_commit: 3df54e9
  private_state: uncommitted_tier3_import_only_execution_public_export_evidence
  public_export_reason: ChatGPT review of Tier 3 import-only execution evidence before private export evidence commit
