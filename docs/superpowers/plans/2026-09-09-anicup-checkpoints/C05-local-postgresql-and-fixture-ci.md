# C05: Local PostgreSQL and fixture CI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Repeatable local/ephemeral PostgreSQL migration and fixture seeding, with always-reporting CI checks that run without production credentials.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§2, 4, 8/environments; Product §11.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M1\
**Prerequisites:** [C02](C02-runnable-fixture-application.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** compose.yaml; drizzle.config.ts; src/server/db/{client,schema}.ts; drizzle/initial migration; scripts/seed-fixtures.ts; tests/integration/database.test.ts; .github/workflows/ci.yml; README.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C02 package/runtime baseline and original fixtures.

**Produces:** Repeatable local/ephemeral PostgreSQL migration and fixture seeding, with always-reporting CI checks that run without production credentials.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Add guest_sessions, pool_versions, cups, and command_receipts relational constraints/indexes from §4. Reserve versioned JSONB state; domain validation arrives in C07–C10.
- [ ] Add local database startup, migration, and seed scripts; make seed reruns safe and prove foreign-key/unique/check constraints. Restrict application tables to server-held SQL credentials; deny public anonymous/authenticated Data API roles where applicable.
- [ ] Configure frozen install, lint, typecheck, focused tests, integration tests and production build; add browser checks as journeys land. Pin third-party actions to reviewed SHAs and isolate fork CI.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** A new local database and CI database migrate and seed successfully twice; duplicate receipt keys fail; no provider fetch or hosted credential is required.

**Checks:** pnpm db:migrate; pnpm db:seed; pnpm test:integration -- tests/integration/database.test.ts; run all configured CI commands locally.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

If CI service configuration expands, deliver the verified local database first and finish the workflow in a continuation before C05 is marked done.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C05 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C05-local-postgresql-and-fixture-ci.md,
the C05 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C05.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
