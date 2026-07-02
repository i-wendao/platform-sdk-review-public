# Typecheck Expectation

No TypeScript no-emit check was run in this draft batch.

Expected follow-up after an approved apply batch:

```bash
cd /opt/project/sdk/adapters/shopee_ts
./node_modules/.bin/tsc --noEmit --target ES2022 --module NodeNext --moduleResolution NodeNext --strict --skipLibCheck src/*.ts
```

The expected risk areas are static type shape changes in `ShopeeAdapterCandidateRecord` and helper function return typing. Runtime SDK behavior remains out of scope.
