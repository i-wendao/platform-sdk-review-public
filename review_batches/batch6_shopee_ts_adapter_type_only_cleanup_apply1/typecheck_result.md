# Typecheck Result

Command:

```bash
cd /opt/project/sdk/adapters/shopee_ts
./node_modules/.bin/tsc --noEmit --target ES2022 --module NodeNext --moduleResolution NodeNext --strict --skipLibCheck src/*.ts
```

Exit code: `0`

Result: PASS.

This validates static TypeScript compatibility only. It does not validate SDK runtime, API, auth, sandbox, token, secret, or DB behavior.
