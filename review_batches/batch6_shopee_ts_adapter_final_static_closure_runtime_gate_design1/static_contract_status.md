# Static Contract Status

## sdk_boundary.ts

- boundary mode is `static_metadata_only`
- unsupported runtime actions are explicit
- package/export evidence is labeled as static-only

## output_contract.ts

- runtime mode is `static_candidate_only`
- shape definition status is `not_modeled_static_only`
- verification status is `not_runtime_verified`
- verification scope is `static_signal_only`

## adapter_candidate.ts

- candidate summaries stay tied to static boundary and output contract
- notes explicitly reject runtime/API/env/token/DB assumptions
- candidate manager names are framed as static signals only

## Status

The three files are aligned as a static candidate contract set.
