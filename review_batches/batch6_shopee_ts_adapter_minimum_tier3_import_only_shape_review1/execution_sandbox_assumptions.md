# Execution Sandbox Assumptions

Future import-only execution, if separately approved, must assume:

- no network access is allowed by scope
- no credentials are available to the probe
- no config preload is allowed
- no package installation is allowed
- no helper runtime wrapper is allowed

If the import path cannot be checked under these assumptions, the probe must stop rather than widen scope.
