# Static Import Surface

Static import surface identified from current files:

- package dependency: `@congminh1254/shopee-sdk`
- static metadata mentions the main export `.`
- static metadata also mentions `./managers`, `./schemas`, and `./storage`

Current static adapter files do not prove any runtime-safe import path.

The future minimum execution batch should therefore start with the narrowest possible import-only candidate and avoid subpath expansion until explicitly reviewed.
