# C21: Reviewed catalog validation and atomic activation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A validated curated-pool format and atomic activation command, demonstrated with original fixtures; real activation requires recorded permission and review.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§3.1, 4/pool_versions, 9/M5; Product §§5–6.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M5\
**Prerequisites:** [C01](C01-data-feasibility-and-permitted-use-decision.md), [C05](C05-local-postgresql-and-fixture-ci.md), [C07](C07-versioned-domain-contracts-and-seeded-randomness.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/catalog/{review-schema,validate,activate,fixture-adapter}.ts; scripts/curate-pool.ts; tests/integration/pool-activation.test.ts; docs/catalog.md; approved curation records.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C01 policy decision and provenance format; C05 pool_versions; C07 candidate snapshot contract.

**Produces:** A validated curated-pool format and atomic activation command, demonstrated with original fixtures; real activation requires recorded permission and review.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Require one representative per franchise, verified 2020–2029 nonfuture debut, Japanese TV/ONA finished first installment, explicit nonadult/non-Ecchi/manual approval and stable ID/title.
- [ ] Validate duplicates, missing safety/provenance/policy and >=48 eligible entries; report every activation failure without changing the active pool.
- [ ] Support 64–100 approved real franchises when available, configured permitted cache versions/lifetimes, metadata removal to version-only markers and frozen historical Cups.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Under-48, duplicate/old/future/sequel/unreviewed pools fail closed; missing art is allowed; a failed activation preserves only a still-permitted snapshot.

**Checks:** pnpm test:integration -- tests/integration/pool-activation.test.ts; run the curator validation command on valid and invalid fixtures.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Validator/tooling and real editorial review are separate sessions. A fixture activation is not evidence of a lawful reviewed live pool.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C21 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C21-reviewed-catalog-validation-and-atomic-activation.md,
the C21 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C21.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
