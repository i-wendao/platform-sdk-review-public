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
