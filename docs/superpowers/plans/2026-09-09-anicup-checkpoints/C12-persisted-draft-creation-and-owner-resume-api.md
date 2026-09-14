# C12: Persisted draft creation and owner resume API Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** POST /api/cups, GET /api/cups/:id and GET /api/me/cups with owner-only canonical state and retained resume entries.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§4–5; Product §7.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M3\
**Prerequisites:** [C08](C08-draft-replacement-and-field-lock-engine.md), [C11](C11-guest-ownership-and-request-security-boundary.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/cups/{create,read,expiry}.ts; src/app/api/cups/route.ts; src/app/api/cups/[id]/route.ts; src/app/api/me/cups/route.ts; tests/integration/cup-create.test.ts; docs/contracts/http.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C08 draft engine, C11 authentication/limits, and C05 cups/receipts tables.

**Produces:** POST /api/cups, GET /api/cups/:id and GET /api/me/cups with owner-only canonical state and retained resume entries.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Validate category anime-2020s and pool usability; create one draft transactionally with schema validation and a cryptographic seed.
- [ ] Serialize duplicate create requests by owner/request key, hash the body and save a receipt; reject same-key/different-body requests.
- [ ] Implement owner-scoped reads, request-time Cup expiry and corrupt-version unavailable responses; handle first-cookie creation and lost-response retry explicitly.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Concurrent duplicate creation with the same established owner/key yields one Cup; another guest cannot read/list it; expired state never reappears through receipt replay.

**Checks:** pnpm test:integration -- tests/integration/cup-create.test.ts tests/integration/sessions.test.ts; pnpm typecheck.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Creation/receipt concurrency and owner resume reads may be separate continuations. Leave mutation commands for C13.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C12 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C12-persisted-draft-creation-and-owner-resume-api.md,
the C12 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C12.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
