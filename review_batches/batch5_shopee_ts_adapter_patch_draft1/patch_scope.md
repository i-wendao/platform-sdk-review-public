# Patch Scope

## Allowed patch targets

- `adapters/shopee_ts/src/sdk_boundary.ts`
- `adapters/shopee_ts/src/output_contract.ts`
- `adapters/shopee_ts/src/adapter_candidate.ts`

## Explicitly excluded

- formal package or lockfile changes
- `.env` or secret/token handling
- SDK client instantiation
- API, sandbox, auth, sign, or runtime calls
- DB/raw/staging/DWD/mart writes
- tests or no-emit execution in this batch
- npm install, npx, or npm exec
- reviewed scripts
- governance policy files

## Patch file check

`proposed_patch.diff` only contains `diff --git` headers for the three allowed source files.
