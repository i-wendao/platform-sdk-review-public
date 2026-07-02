# V7 Current Status

`docs/GOVERNANCE_V7.md` is the canonical governance entrypoint.

Current status:

- instruction self-audit required
- Tier determination required
- branch / remote / status checks required
- reviewed audit scripts only
- `preflight_v6.sh` via `bash` only
- no `.env` / token / secret access unless explicitly upgraded and approved
- no API / DB / runtime / auth / sandbox unless explicitly upgraded and approved
- no npm install / npx / npm exec unless explicitly approved
- no automatic external rule adoption
- external watch sources remain watch-only references
- final external-source adoption decisions require joint user + ChatGPT approval
- governance rollups remain mandatory every 3-5 batches, at phase closure, and after public export

