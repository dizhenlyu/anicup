# Checkpoint handoff template

Copy this structure to `handoffs/Cnn.md` after work. Keep it to 300–500 words and use factual values, including "not run" or "unavailable" where appropriate.

## Identity and status

Record checkpoint ID, date, status (in-progress / awaiting-evidence / done), branch, base commit, resulting commit or exact uncommitted file list, and whether the changes are available in the next session's checkout.

## Delivered behavior

Describe the tested behavior or produced decision. List only relevant changed files.

## Interface contract

Record actual export signatures, request/response shapes, schema/rules versions and configuration names required by dependent checkpoints. State compatibility decisions and any differences from proposed paths.

## Verification evidence

List exact commands, result counts/exit codes and evidence file paths. Separate local/fixture/emulated observations from actual provider/host/device observations. Record any outstanding failing test with its exact reproduction.

## Remaining work and blockers

List unchecked acceptance criteria, missing external evidence, and the precise next action for a continuation. If done, identify eligible next checkpoints without starting them.

## Context observation

Record actual starting/ending/peak usage only if visible. Otherwise write "Context percentage unavailable; cap not verified." Do not infer usage from elapsed time, file length or account limits.
