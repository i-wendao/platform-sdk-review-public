# Public Audit Rule

Public export is not complete until the following all match the exported commit:

- public mirror local HEAD
- SSH remote branch HEAD
- unauthenticated HTTPS remote branch HEAD

If branch browsing 404s but commit-hash URLs work, audit the commit-hash URL first.

If commit-hash URLs also fail, public audit must not PASS.

