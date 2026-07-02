# Governance V7

`docs/GOVERNANCE_V7.md` is the canonical governance entrypoint for Codex work in this repository.

## Read order

1. `docs/GOVERNANCE_V7.md`
2. Current batch instruction
3. Files directly relevant to the current batch
4. Recent evidence required for the batch
5. `scripts/audit/preflight_v6.sh` only through `bash` when allowed

Historical governance files remain valid, but they are subordinate to this entrypoint unless a batch explicitly requires them.

## Canonical rules

- Project root is `/opt/project/sdk`.
- Default response language is Chinese.
- The repository is a multi-platform SDK-first data ingestion project.
- Shopee is the first-stage focus; TikTok Shop remains planned.
- The long-project loop is mandatory: no Plan, no execution; no Closure, no next batch.
- Every batch must do Instruction Self-Audit.
- Every batch must do Tier determination.
- Every batch must check branch, remote, and git status.
- Reviewed audit scripts are the only scripts that may run directly within scope.
- `scripts/audit/preflight_v6.sh` must be invoked via `bash`; do not chmod it or modify `scripts/audit/`.
- Do not read `.env`, tokens, secrets, or sensitive config unless the batch is explicitly upgraded and approved.
- Do not call API, DB, runtime, auth, or sandbox flows unless explicitly upgraded and approved.
- Do not run `npm install`, `npx`, or `npm exec` unless explicitly approved.
- Do not modify package, lockfile, or governance rules unless the current batch explicitly allows it.
- Public export must remain public-safe and use whitelist-only evidence.
- Governance rollup public audit must happen every 3-5 batches, at every phase closure, and after every public export.
- External AI workflow / governance sources are watch-only references, not project authority.
- Any rule or practice from an external watch source must be handled in a separate batch with explicit approval, public-safe review, and ChatGPT review before it can influence V7 or project rules.
- External watch sources must not be copied automatically into V7 or the main project rules.
- External watch repositories must stay outside the main source tree and must not be executed as scripts or installers.
- Codex must not independently decide whether an external watch source becomes authority, should be cited, or should influence V7 or project rules.
- Codex may only produce public-safe snapshots, summaries, candidate practices, and risk notes for external watch sources.
- The final decision to keep watching, to cite, to absorb, or to revise V7 / project rules from an external watch source must be jointly approved by the user and ChatGPT.

## Token efficiency rules

- Do not reread all historical governance files by default.
- Default reads are the V7 entrypoint, the current batch's direct files, necessary recent evidence, and the preflight state.
- If historical governance files are needed, state the reason.
- Avoid large source previews unless the user explicitly requests them.
- Keep review packages focused on summaries, file paths, risk points, and evidence matrices.

## Model / Effort policy

Model and Effort are manually confirmed by the user before the batch.
Codex does not need to record, infer, or validate runtime model / Effort visibility in batch正文.

## Subordinate policy files

- `docs/TOKEN_EFFICIENCY_POLICY.md`
- `docs/AUDIT_SCRIPT_POLICY.md`
- `docs/CODEX_EXECUTION_CHECKLIST.md`
- `docs/DECISION_LOG.md`
- `docs/PROJECT_MAP.md`
