# Consolidated Rules

## Entry point and reading order

- Read `docs/GOVERNANCE_V7.md` first.
- Then read only the current batch instruction and the batch-relevant files.
- Do not reread the full historical governance set by default.

## Required checks

- Instruction Self-Audit
- Tier determination
- branch / remote / status checks
- reviewed-script status check
- preflight

## Safety boundaries

- No `.env`, token, secret, API, DB, runtime, auth, sandbox, npm install, npx, or npm exec unless separately approved.
- Public export must be whitelist-only and public-safe.
- `scripts/audit/preflight_v6.sh` must stay invoked via `bash`; do not chmod it.

