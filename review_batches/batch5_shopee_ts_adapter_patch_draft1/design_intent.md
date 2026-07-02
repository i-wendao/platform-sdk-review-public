# Design Intent

## Why change

The current skeleton already records static Shopee SDK adapter candidates, but its boundary and output contract can be made easier to review before any runtime SDK integration. The draft proposes clearer type boundaries, explicit runtime prohibition metadata, and small pure helper functions that make future review batches easier to audit.

## File-level intent

### `sdk_boundary.ts`

- Add explicit `SdkBoundaryMode`, `SdkPackageMetadata`, `SdkBoundaryCapabilityMap`, and `SdkBoundarySummary` types.
- Make unsupported runtime actions explicit as static metadata.
- Keep the boundary as local static metadata only.

### `output_contract.ts`

- Add explicit `AdapterRuntimeMode`, `ShapeDefinitionStatus`, and shape boundary types.
- Replace separate request/response shape fields with a grouped `shapes` object.
- Add `readsEnvironmentFile` and `readsSecrets` false boundaries to make no-runtime limits easier to inspect.

### `adapter_candidate.ts`

- Export the static manager candidate list for reviewability.
- Add a typed summary result with record count and domain list.
- Add pure helper functions for domain extraction and filtering.

## Static / no-runtime boundary

The proposed patch contains only TypeScript type definitions, constants, and pure functions. It does not instantiate the SDK client, read environment files, inspect secrets or tokens, call APIs, call sandbox, write a database, perform network requests, or run SDK discovery.

## Tier classification

This remains Tier 2 only because it is a patch draft and no formal source file is modified. Runtime SDK, auth, sandbox, API, `.env`, token, DB, or network work would trigger Tier 3 and invalidate this draft scope.

## Review requirement

ChatGPT must review this draft before any apply batch. If applied later, the apply batch must be separate and must run a dedicated no-emit static check after source changes are in place.
