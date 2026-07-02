# Public Remote Truth Check

The public audit must not PASS unless:

- local public HEAD matches the exported commit
- SSH remote branch HEAD matches the exported commit
- unauthenticated HTTPS remote branch HEAD matches the exported commit

If the unauthenticated HTTPS result does not match, the public audit state is `PENDING` or `BLOCKED`.

