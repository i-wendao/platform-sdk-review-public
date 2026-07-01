# Risk Review

Risk level: Tier 2 draft audit script review.

## Primary risks

- A reusable script could be run before review.
- A preflight script could accidentally mutate git state or remotes.
- A script could hide unsafe assumptions behind convenience.

## Mitigations

- Status remains `draft`.
- This batch does not run the script.
- `docs/AUDIT_SCRIPT_POLICY.md` is not updated to `reviewed`.
- The script is copied into a review package and exported for ChatGPT review.
- Later reviewed status requires ChatGPT review PASS and Codex reverse review PASS.
