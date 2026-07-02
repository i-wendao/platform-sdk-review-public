# Risk Register

- import may have side effects at module load time
- package import may implicitly attempt telemetry, version check, or lazy network bootstrap
- static files do not prove that the package import is side-effect free
- future execution must assume stop-on-first-signal, not best-effort continuation
- subpath imports such as `./storage` are more likely to drift into auth-adjacent behavior and should stay out of the minimum candidate
