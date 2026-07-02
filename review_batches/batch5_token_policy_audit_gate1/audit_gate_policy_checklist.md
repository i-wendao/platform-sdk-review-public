# Audit Gate Policy Checklist

- [x] Audit Gate is defined as a separate batch.
- [x] Audit Gate only reviews instruction scope, Tier, model, reasoning level, permission boundaries, git state, reviewed-script status, and secret/API/DB/env risk.
- [x] A single batch still keeps one model and one reasoning level.
- [x] If a higher model must review before lower-model execution, the work must be split into Audit Gate batch plus Execution batch.
- [x] Required Audit Gate scenarios are listed.
- [x] Low-risk mechanical batches usually do not require Audit Gate.
- [x] Audit Gate PASS does not remove the Execution batch's Instruction Self-Audit requirement.
- [x] A lower model that finds uncertainty, conflict, Tier mismatch, script status mismatch, git mismatch, or secret/API/DB/env risk must stop and return to Audit Gate.
- [x] Token saving cannot override governance.
