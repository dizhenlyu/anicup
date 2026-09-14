# C13: Atomic commands and retry-safe persistence Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** POST /api/cups/:id/commands for replace_candidate, lock_field, confirm_group, vote and undo using requestId plus expectedRevision.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§3.2, 4–5, 7/transactional timestamps.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M3\
**Prerequisites:** [C10](C10-knockout-decisions-undo-and-result-projection.md), [C12](C12-persisted-draft-creation-and-owner-resume-api.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/cups/commands.ts; src/app/api/cups/[id]/commands/route.ts; tests/integration/cup-commands.test.ts; docs/contracts/http.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C10 applyCommand and projection; C12 authorized state and receipt handling.

**Produces:** POST /api/cups/:id/commands for replace_candidate, lock_field, confirm_group, vote and undo using requestId plus expectedRevision.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Write concurrent/lost-response tests against a real ephemeral database before implementing the transaction.
- [ ] Authenticate and check expiry/deletion before receipt replay; lock Cup row, compare revision, apply validated command, persist state/timestamps/receipt atomically.
- [ ] Return current authorized canonical state on replay and 409 conflicts; reject same-key/different-body use. Preserve first lock/completion and latest completion for later analytics.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Two conflicting commands cannot both win; retry does not duplicate transitions; failed persistence never acknowledges success; expired/deleted replay is denied.

**Checks:** pnpm test:integration -- tests/integration/cup-commands.test.ts; pnpm exec vitest run tests/domain; pnpm typecheck.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

If concurrency debugging expands, keep this checkpoint in progress and hand off the exact failing interleaving; do not mix UI work into it.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C13 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C13-atomic-commands-and-retry-safe-persistence.md,
the C13 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C13.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
