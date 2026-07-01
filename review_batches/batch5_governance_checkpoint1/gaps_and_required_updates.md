# Gaps and Required Updates

## PASS

- Core v6 enhanced policy documents exist.
- Token efficiency policy exists.
- Audit script governance policy exists.
- Public mirror policy packages exist.
- Skeleton files are committed and statically reviewed.

## PARTIAL

- Issue Closed Loop exists but lacks recent B5-004 to B5-007 issue entries.
- RAG/Closure backfill exists but does not cover latest GH/public mirror, 5.13R3, 5.14, Token Efficiency, and Audit Script batches.
- Codex checklist and small-batch templates do not yet mention Tier policy or audit script governance.

## NEEDS_UPDATE

- `docs/DECISION_LOG.md`
- `docs/PROJECT_MAP.md`
- recent runtime Closure and RAG backfills
- Issue Closed Loop update for B5-004 to B5-007

## Can Defer

- Creating actual `scripts/audit/*.sh` files. Current audit script policy says they are only planned and must not be run.
- Full template rewrites, as long as the next batches keep referencing active v6 enhanced docs and explicit Tier boundaries.
