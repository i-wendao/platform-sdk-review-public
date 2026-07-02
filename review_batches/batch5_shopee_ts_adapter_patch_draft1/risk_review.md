# Risk Review

## Type risks

- Grouping request/response shape fields under `shapes` changes the static record shape and may require downstream references to update if any exist.
- Explicit return types make future TypeScript errors easier to catch, but this draft has not run no-emit.
- Helper functions use `Set` and `Array.from`; the project already checks with an ES2022 target in prior static checks.

## Output contract compatibility risks

- Consumers of `requestShapeCandidate` and `responseShapeCandidate` would need to read `shapes.request` and `shapes.response` after apply.
- The patch remains candidate-only and does not define real request/response contracts.

## Runtime risks

- SDK runtime is not validated.
- API/auth/sandbox is not validated.
- No-emit PASS from earlier batches does not prove this draft passes until it is applied and checked separately.

## Draft status risk

This draft is not landed code. It must not be treated as applied source. A later apply batch and no-emit check are required after ChatGPT review.
