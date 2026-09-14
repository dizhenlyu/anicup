# C06: Deployment promotion and migration gate Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** One documented production controller and evidence that only the tested main commit can promote after serialized migrations.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §8/environments and §9/M1; Product §12.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M1\
**Prerequisites:** [C04](C04-image-and-cookie-runtime-feasibility.md), [C05](C05-local-postgresql-and-fixture-ci.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** .github/workflows/migrate.yml; docs/deployment.md; docs/evidence/deployment-gates.md; hosting configuration if required.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C05 named CI checks; C04 runtime decision; authorized disposable hosting project/service access.

**Produces:** One documented production controller and evidence that only the tested main commit can promote after serialized migrations.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Configure explicit required Deployment Checks including the protected migration result; previews use fixtures or a non-production database.
- [ ] In a disposable project, exercise failing, pending and missing checks, stale builds, serialized additive migrations, and compatible rollback. Verify with an unauthenticated managed Data API request that application tables are inaccessible; disable that API when it is not needed.
- [ ] If native checks cannot enforce the contract, document and use a single Actions-controlled deployment path with competing production promotion disabled.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Recorded commit IDs and alias observations establish failure/missing checks block promotion and an older build cannot supersede the intended release.

**Checks:** Run the disposable deployment rehearsal and capture check state, migration result, deployed SHA and alias before/after. Config files alone are insufficient.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Without account access, finish reviewable configuration and mark awaiting-evidence. Fixture engineering continues; public launch remains blocked.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C06 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C06-deployment-promotion-and-migration-gate.md,
the C06 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C06.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
