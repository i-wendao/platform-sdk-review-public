# Runtime Gate Design

## Gate conclusion

Any future runtime/API/auth/sandbox/env/token/DB work must be treated as Tier 3+.

## Required gate shape

Before any runtime/API batch starts, it must have:

- a new dedicated batch
- explicit user approval
- explicit Tier 3 or higher classification
- endpoint or action whitelist
- call budget
- failure-stop rule
- no pagination by default
- no retry storm
- no full scan behavior

## Codex authority limit

Codex must not independently decide to enter runtime/API work from a static batch.

## Design-only conclusion

This batch defines the gate only. It does not authorize runtime execution.
