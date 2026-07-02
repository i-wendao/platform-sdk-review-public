# Env Token Precheck Boundary

The future import-only batch must not perform any precheck that reads:

- `.env`
- token
- secret
- credential file
- hidden config

If such a precheck appears necessary, the import-only path is no longer valid and the batch must stop with escalation.
