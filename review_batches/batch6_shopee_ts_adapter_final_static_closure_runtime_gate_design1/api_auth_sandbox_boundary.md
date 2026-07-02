# API Auth Sandbox Boundary

## Still forbidden in the current state

- Shopee API request execution
- auth/signing logic execution
- sandbox execution
- token refresh
- credential discovery
- environment file reads

## Future boundary for a dedicated runtime batch

If a future batch wants runtime/API behavior, it must narrow scope first:

- one explicit objective
- one explicit endpoint or one explicit runtime probe shape
- explicit stop conditions
- explicit evidence format

## Not allowed to infer

Static naming, static symbols, and static candidate records must not be used as proof that API/auth/sandbox behavior already works.
