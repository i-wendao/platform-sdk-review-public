# Dashboard Update Protocol

Required update events:

- governance document change
- public export
- phase closure
- every 3-5 batches
- WARN / FAIL / UNKNOWN
- public audit `PENDING` or `BLOCKED`
- Tier 3+ execution
- runtime / import / client construction / API / DB execution
- local / SSH / HTTPS remote truth mismatch
- non-clean start or approved exception state

Codex updates the dashboard after the event.
ChatGPT audit results are written back by a follow-up Codex batch.

