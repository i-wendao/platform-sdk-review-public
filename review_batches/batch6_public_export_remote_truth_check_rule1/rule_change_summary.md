# Rule Change Summary

Added a minimal public export remote truth check rule.

The rule requires public exports to verify:

- public mirror local HEAD
- SSH `ls-remote`
- unauthenticated HTTPS `ls-remote`

Public review requests must also include commit-hash fixed tree/raw URLs.

