# Disallowed Fallbacks

The future import-only batch must not auto-fallback to:

- `npm install`
- `npx`
- `npm exec`
- package.json changes
- lockfile changes
- source changes
- `.env` / token / secret reads
- API probes
- client construction

If import-only fails under the approved shape, the batch must end in failure or stop, not widen scope.
