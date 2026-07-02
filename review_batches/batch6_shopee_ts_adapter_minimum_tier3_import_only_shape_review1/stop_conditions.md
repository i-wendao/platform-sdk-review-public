# Stop Conditions

The future import-only batch must stop immediately if any of the following occurs:

- `.env` read attempt
- token/secret/credential file access
- hidden config discovery
- HTTP/API request
- telemetry or version check request
- lazy auth request
- DB/raw/staging/DWD/mart write
- client construction requirement
- `npm install`, `npx`, `npm exec`, or `pip install` demand

No automatic fallback is allowed after a stop condition.
