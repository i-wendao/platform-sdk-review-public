# Execution Plan

## Proposed next batch

`Batch 5.GOVERNANCE-BACKFILL-APPLY1`

## Purpose

Formally write the governance backfill that this package proposes.

## Proposed allowed modifications

- update `docs/DECISION_LOG.md`
- update `docs/PROJECT_MAP.md`
- create or update runtime issue closed-loop log under `runtime/logs/`
- create RAG snapshot under `runtime/rag_snapshots/`
- create Closure under `runtime/closures/`

## Proposed prohibited actions

- no adapter code changes
- no package or lockfile changes
- no scripts/audit creation or execution
- no `.env` reads
- no secret inspection
- no API calls
- no database writes
- no tests
- no SDK examples
- no auth/sandbox
- no SDK method discovery
- no remote configuration
- no push unless separately approved after commit

## Public mirror review

Because Decision / Project Map / runtime governance files are generally safe when sanitized, the formal write package or resulting diff should be exported to public mirror for ChatGPT review before commit, unless ChatGPT explicitly approves a direct private commit path.
