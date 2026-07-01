# Policy Registry Proposed Update

No policy file is modified in this batch.

If ChatGPT review PASS and Codex reverse review PASS both happen later, a separate batch may update `docs/AUDIT_SCRIPT_POLICY.md` registry from:

```text
script: scripts/audit/preflight_v6.sh
status: planned
```

to:

```text
script: scripts/audit/preflight_v6.sh
status: reviewed
```

Until then, the script status remains `draft`, and Codex must not run it.
