# Stdout Stderr Evidence Plan

If a future import-only batch is authorized, evidence may record only:

- command string
- exit code
- stdout/stderr summary
- whether a stop condition was triggered
- no env/token/API/DB attestation

No raw credential text, no full runtime dump, and no external response body may be retained.
