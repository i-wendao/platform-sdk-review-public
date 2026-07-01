# Risk Review

Risk level: Tier 2 static verification.

Primary risks checked:

- `.env` access
- credential or token handling
- Shopee/TikTok API calls
- database writes
- SDK examples / auth / sandbox execution
- package or lockfile changes
- accidental top-level `shopee_ts/` path creation

This batch does not modify formal source files. It only creates a review package and exports it to the public review mirror.
