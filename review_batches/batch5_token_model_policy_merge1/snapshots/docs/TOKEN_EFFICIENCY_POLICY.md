# Token Efficiency Policy

This document defines execution tiers to reduce repeated ChatGPT/Codex prompt overhead while preserving v6 enhanced governance, Harness boundaries, RAG discipline, Closure/Issue/Decision loops, and safety-first execution.

## Purpose

The goal is to reduce repeated long prompts and verbose reports in long-running project work.

This policy must not weaken:

- v6 enhanced project rules
- Harness boundaries
- RAG retrieval discipline
- Closure / Issue / Decision loops
- role dispatch
- safety checks
- secret / token / `.env` protection
- API / DB execution boundaries

If this policy conflicts with a stricter project rule, the stricter rule wins.

## Tier 1: Low-risk commit / archive batches

Use Tier 1 for low-risk, already-reviewed or tightly scoped operations.

Examples:

- committing an already-reviewed review package
- committing explicitly named files
- checking `git status`, `git log`, `git remote`
- pushing an already-reviewed branch to the correct private remote
- small public mirror export of already-sanitized review materials

Expected style:

- short prompt
- explicit file whitelist
- short output
- no repeated full v6 document listing

Default prohibitions:

- no `.env` reads
- no secret inspection
- no API calls
- no database writes
- no SDK examples
- no auth/sandbox runs
- no tests unless explicitly approved
- no package/lockfile changes unless explicitly approved
- no unauthorized push
- no force push

Recommended output limit: 10 items.

## Tier 2: Medium-risk static verification / patch review batches

Use Tier 2 for static validation and review preparation.

Examples:

- patch repair
- `git apply --check`
- temporary-directory apply verification
- path safety checks
- public mirror sanitization and export
- static source review packages

Expected style:

- concise prompt
- clear preflight
- whitelist paths
- real landing verification for patches when path risk exists
- public mirror review when content is safe to expose

Required safeguards:

- verify current branch and clean status
- verify allowed paths
- verify no blacklisted paths
- verify no `.env`, token, secret, DB dump, raw/staging/DWD/mart, or API evidence enters public mirror
- stop on unexpected files or conflicting instructions

Recommended output limit: 12 items.

## Tier 3: High-risk execution batches

Use Tier 3 for operations that can affect real systems, credentials, data, or runtime behavior.

Examples:

- formal application of complex patches
- SDK integration beyond static skeletons
- API probes
- database writes
- token/env handling
- raw/staging/DWD/mart operations
- real platform evidence
- auth/sandbox execution
- migration or production-impacting changes

Expected style:

- full boundary statement
- explicit allow/deny list
- full evidence output
- ChatGPT review before irreversible or externally visible effects
- zip/evidence upload when public mirror is insufficient

Recommended output: complete enough for audit; do not compress away critical details.

## Prompt writing rules

Do not rely only on shorthand such as "A/B/C mode".

A valid instruction should name the tier and state the actual operational boundary, for example:

> This is a Tier 1 low-risk commit batch. Only commit the specified files. Do not test, call APIs, read `.env`, write DB, or push.

The current batch's explicit allow/deny list always controls execution.

## Output compression rules

For Tier 1 and Tier 2, Codex should avoid repeating full long-project boilerplate unless needed.

Codex should still report:

- instruction review result
- boundary judgment
- changed files or exported files
- commit hash if any
- status before/after
- whether prohibited actions were avoided

If an error, conflict, unexpected file, failed check, or possible safety issue appears, Codex must stop and provide a complete explanation, even if that exceeds the usual output limit.

## Safety priority

Token efficiency never overrides safety.

If there is any conflict between this policy and stricter project rules, the stricter rule wins.

If Codex is uncertain whether an operation is Tier 1, Tier 2, or Tier 3, it must treat the batch as the higher-risk tier or stop and ask for clarification.

## Audit script governance

Repeated checks may be moved into `scripts/audit/` only after the script is documented, reviewed, and marked as `reviewed` in `docs/AUDIT_SCRIPT_POLICY.md`.

Codex must not run planned, draft, or deprecated audit scripts.

Audit scripts are convenience tools, not authority. If a script conflicts with v6 enhanced governance, Harness boundaries, or the current batch instructions, Codex must stop.

## Evidence for untracked new files

When a review batch includes untracked new files, `git diff` alone is not sufficient evidence because it does not show untracked file contents.

The review evidence must include at least one of:

- a snapshot copy of the new files inside the review package
- `git diff --no-index /dev/null <new-file>` output for each new file
- an equivalent explicit file-content evidence package

This is required before ChatGPT can fully review untracked runtime, closure, RAG, issue, or source files.

## Model and reasoning level policy

`docs/TOKEN_EFFICIENCY_POLICY.md` is the single source of truth for token efficiency, Codex model assignment, reasoning level selection, and batch splitting.

If a prompt or older document mentions `Codex Model Assignment Policy v1` or `Codex Reasoning Level Policy v1`, treat those policies as merged into this document. They must not become a second policy source.

### One batch, one model, one reasoning level

Every Codex batch must declare:

```text
建议模型：
若使用 GPT-5.5，Reasoning Level：
若使用 GPT-5.4，Reasoning Level：
原因：
```

A single batch should use one model and one reasoning level. If a task contains actions with different risk levels, split the work into separate batches.

### Model and reasoning by highest risk

Choose the model and reasoning level by the highest-risk action in the current batch, not by each individual command.

### Default assignment

| Model | Reasoning Level | Default scope |
|---|---|---|
| GPT-5.4-Mini | Low | reviewed preflight; git status / branch / remote / diff; commit evidence checks; review_queue / Closure / RAG / issue log archive; public mirror export; no-emit static check that only records results; package/toolchain inspection; reviewed archive commit/push |
| GPT-5.4 | Medium | draft script generation; review package design; small governance policy updates; PROJECT_MAP / DECISION_LOG small patches; public/private evidence alignment; simple TypeScript error location without modifying formal code |
| GPT-5.3-Codex | High | Codex reverse review; patch review; diff review; reverse review before marking scripts reviewed; checking whether ChatGPT missed a boundary issue |
| GPT-5.5 | High | formal adapter code fixes; SDK boundary / output contract / adapter candidate design; complex TypeScript fixes; auth / sign / pagination / raw output contract design |
| GPT-5.5 | Extra high | Tier 3 API / DB / env / token / SDK runtime; public/private repo abnormal recovery; rule conflict, rollback, or incident analysis; business semantics, data definitions, or permission-boundary decisions |

### Required checks follow the batch model

These checks do not require switching models inside the same batch. They follow the selected batch model and reasoning level:

- Instruction Self-Audit
- active v6 docs
- `docs/TOKEN_EFFICIENCY_POLICY.md`
- `docs/AUDIT_SCRIPT_POLICY.md`
- reviewed-script status check
- Tier check
- git state check

If a lower model finds uncertainty, conflict, unclear Tier, unclear script status, path risk, secret/API/DB/env risk, or git state mismatch, it must stop and request a model upgrade or ChatGPT review.

### Low model stop rule

GPT-5.4-Mini / Low is limited to verifiable, mechanical, low-judgment tasks.

If it finds abnormal state, conflicting instructions, missing approval, unclear file scope, or higher-risk implications, it must stop. It must not expand permissions, repair high-risk issues, rewrite scripts, or reinterpret governance policy on its own.

### Token saving cannot override governance

Saving tokens or using a lower model must not override:

- Harness
- RAG
- Closure
- Issue Closed Loop
- Decision Log
- PROJECT_MAP
- `docs/AUDIT_SCRIPT_POLICY.md`
- reviewed-script status
- Tier policy
