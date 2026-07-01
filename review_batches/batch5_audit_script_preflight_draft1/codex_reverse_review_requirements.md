# Codex Reverse Review Requirements

After ChatGPT review PASS, Codex must independently re-check before marking this script `reviewed`:

- no `.env` read
- no secret inspection
- no API / DB / network operations except local git inspection
- no test / SDK / auth / sandbox execution
- no write operations
- no remote modification
- no fetch / pull / push
- argument parsing rejects invalid input
- expected branch, remote, and clean checks fail safely
- script scope remains Tier 1 / Tier 2 only

If any issue is found, Codex must stop and request a corrected draft package.
