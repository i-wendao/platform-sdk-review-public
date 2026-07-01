# Public Sync Safety Review

## Can Sync to Public Mirror

The following can be synchronized after sanitization checks:

- sanitized governance matrix
- non-sensitive issue summaries
- non-sensitive decision summaries
- public/private commit mapping
- batch status summaries
- rule status summaries
- review packages that contain no secrets, tokens, raw data, DB dumps, API evidence, shop IDs, order data, or platform credentials

## Must Not Sync

Never sync:

- `.env`
- `.env.*` except explicitly reviewed empty examples
- secret or token values
- access tokens or refresh tokens
- private keys
- API response originals
- shop / partner / seller / buyer identifiers
- order / refund / customer data
- DB dumps, `.db`, `.sqlite`
- raw / staging / DWD / mart data
- supplier, finance, backend, or platform evidence containing real business data
- `node_modules`

## Current Conclusion

Public mirror has been useful for ChatGPT review, but it must remain a sanitized mirror only. Private repo remains source of truth. Public repo must not be merged back into private repo.
