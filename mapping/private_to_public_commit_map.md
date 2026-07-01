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
