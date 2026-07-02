# Before After

## Before

- public export guidance relied on local mirror state and review package contents
- branch URLs could be used without an explicit remote truth check

## After

- public export must verify local HEAD, SSH `ls-remote`, and unauthenticated HTTPS `ls-remote`
- unauthenticated HTTPS mismatch blocks public audit progression
- commit-hash URLs are the preferred audit entry point

