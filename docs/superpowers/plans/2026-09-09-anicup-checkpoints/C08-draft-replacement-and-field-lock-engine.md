# C08: Draft replacement and field lock engine Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** createDraft, replaceCandidate and lockField pure operations that persist a frozen 32-entry field, reserve consumption and eight groups.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §3.1 and §3.2/field invariants; Product §§4/field review, 5.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M2\
**Prerequisites:** [C07](C07-versioned-domain-contracts-and-seeded-randomness.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/domain/tournament/{draft,lock}.ts; tests/domain/draft.test.ts; docs/contracts/tournament.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C07 CandidateSnapshot/CupState, schema validator, versioned shuffle and group stream.

**Produces:** createDraft, replaceCandidate and lockField pure operations that persist a frozen 32-entry field, reserve consumption and eight groups.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Write boundary cases for under-48 pools, duplicates, denylisted candidates, stale pool permission, and exhausted reserves.
- [ ] Create the draft from a canonical pool and cryptographic seed supplied at the boundary; persist field/reserve/rejected IDs and versions.
- [ ] Replace only from the same unused reserve and lock exactly 32 unique franchises into A–H; emit field_locked only once.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Exhaustion preserves the old entry; rejects never reappear; pool refresh cannot change existing drafts; groups cover each locked entrant once; replacement after lock fails.

**Checks:** pnpm exec vitest run tests/domain/draft.test.ts tests/domain/random.test.ts; pnpm typecheck.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

If needed, finish draft/replacement tests before a separate lock/group-assignment continuation.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C08 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C08-draft-replacement-and-field-lock-engine.md,
the C08 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C08.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
