# Review Checklist

ChatGPT should verify:

- The script is read-only.
- The script does not read `.env`.
- The script does not inspect secret contents.
- The script does not call APIs.
- The script does not write databases.
- The script does not run tests or SDK/auth/sandbox flows.
- The script does not run `git fetch`, `git pull`, or `git push`.
- The script does not modify remotes.
- The script does not delete files.
- The argument parser rejects unknown and incomplete arguments.
- `--expect-branch`, `--expect-remote`, and `--require-clean` have clear failure modes.
