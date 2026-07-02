# Selected Probe Candidate

Selected future candidate:

- import-only feasibility check

Explicitly not selected:

- client construction
- auth/token/env-dependent probe
- real API probe

Reason:

Import-only is the smallest runtime-adjacent candidate that can still be shaped under Tier 3 without authorizing network, credentials, or persistence.
