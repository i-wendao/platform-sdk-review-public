#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'USAGE'
Usage: preflight_v6.sh [--expect-branch <branch>] [--expect-remote <name> <url>] [--require-clean]

Read-only git preflight for Tier 1 / Tier 2 batches.

Options:
  --expect-branch <branch>      Require current branch to match <branch>.
  --expect-remote <name> <url>  Require git remote <name> fetch/push URL to match <url>.
  --require-clean              Require git status --short to be empty.
  -h, --help                   Show this usage text.

This script must not read .env, inspect secrets, call APIs, write databases,
run tests, run SDK/auth/sandbox flows, modify remotes, fetch, pull, push,
delete files, or modify project files.
USAGE
}

EXPECT_BRANCH=""
EXPECT_REMOTE_NAME=""
EXPECT_REMOTE_URL=""
REQUIRE_CLEAN=0

while [ "$#" -gt 0 ]; do
  case "$1" in
    --expect-branch)
      if [ "$#" -lt 2 ]; then
        echo "ERROR: --expect-branch requires a value" >&2
        usage >&2
        exit 2
      fi
      EXPECT_BRANCH="$2"
      shift 2
      ;;
    --expect-remote)
      if [ "$#" -lt 3 ]; then
        echo "ERROR: --expect-remote requires <name> <url>" >&2
        usage >&2
        exit 2
      fi
      EXPECT_REMOTE_NAME="$2"
      EXPECT_REMOTE_URL="$3"
      shift 3
      ;;
    --require-clean)
      REQUIRE_CLEAN=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "ERROR: unknown argument: $1" >&2
      usage >&2
      exit 2
      ;;
  esac
done

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "ERROR: current directory is not inside a git work tree" >&2
  exit 1
fi

COMMIT="$(git rev-parse --short HEAD)"
BRANCH="$(git branch --show-current)"
STATUS="$(git status --short)"
REMOTE_OUTPUT="$(git remote -v)"

printf 'commit=%s\n' "$COMMIT"
printf 'branch=%s\n' "$BRANCH"
echo 'status:'
printf '%s\n' "$STATUS"
echo 'remotes:'
printf '%s\n' "$REMOTE_OUTPUT"

if [ -n "$EXPECT_BRANCH" ] && [ "$BRANCH" != "$EXPECT_BRANCH" ]; then
  echo "ERROR: branch mismatch: expected '$EXPECT_BRANCH', got '$BRANCH'" >&2
  exit 1
fi

if [ -n "$EXPECT_REMOTE_NAME" ]; then
  FETCH_LINE="${EXPECT_REMOTE_NAME}	${EXPECT_REMOTE_URL} (fetch)"
  PUSH_LINE="${EXPECT_REMOTE_NAME}	${EXPECT_REMOTE_URL} (push)"
  if ! printf '%s\n' "$REMOTE_OUTPUT" | grep -Fx "$FETCH_LINE" >/dev/null; then
    echo "ERROR: remote fetch URL mismatch for '$EXPECT_REMOTE_NAME'" >&2
    exit 1
  fi
  if ! printf '%s\n' "$REMOTE_OUTPUT" | grep -Fx "$PUSH_LINE" >/dev/null; then
    echo "ERROR: remote push URL mismatch for '$EXPECT_REMOTE_NAME'" >&2
    exit 1
  fi
fi

if [ "$REQUIRE_CLEAN" -eq 1 ] && [ -n "$STATUS" ]; then
  echo "ERROR: git working tree is not clean" >&2
  exit 1
fi
