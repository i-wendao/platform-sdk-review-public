# Script Scope

## Path

`scripts/audit/preflight_v6.sh`

## Status

`draft`

## Applicable Tier

- Tier 1 low-risk commit/archive batches
- Tier 2 static verification / review batches

Not applicable to Tier 3 API / DB / env / token / SDK runtime batches.

## Intended behavior

Read-only git preflight:

- verify current directory is inside a git work tree
- print short commit
- print current branch
- print `git status --short`
- print `git remote -v`
- support `--expect-branch <branch>`
- support `--expect-remote <name> <url>`
- support `--require-clean`
- fail non-zero on branch / remote / clean mismatches
- fail non-zero on unknown or incomplete arguments

## Prohibited behavior

The script must not read `.env`, inspect secrets, call APIs, write databases, run tests, run SDK/auth/sandbox, run SDK method discovery, fetch, pull, push, modify remotes, delete files, or modify project files.
