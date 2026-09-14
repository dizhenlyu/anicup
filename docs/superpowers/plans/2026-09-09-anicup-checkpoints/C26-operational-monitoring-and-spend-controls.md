# C26: Operational monitoring and spend controls Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Secret-free health/readiness and actionable failure/cost reporting, with tested knobs that restrict new work under load.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §8/monitoring, limits, portability; Product §10.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M5\
**Prerequisites:** [C20](C20-public-cards-qr-and-share-controls.md), [C22](C22-bounded-provider-sync-and-safe-cover-fetching.md), [C24](C24-request-time-retention-and-daily-cleanup.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/operations/{metrics,health}.ts; src/app/api/{health,ready}/route.ts; scripts/check-operations.ts; docs/operations.md; docs/costs.md; tests/integration/operations.test.ts.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** Save/provider/image/cleanup boundaries, trusted deployment settings and configured request/render limits.

**Produces:** Secret-free health/readiness and actionable failure/cost reporting, with tested knobs that restrict new work under load.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Measure failed saves, provider failures, eligible pool size, image errors, cleanup lag, public latency, storage/egress and forecast spend.
- [ ] Document US$35/month forecast alert, restrictions before US$50 total including domain, three-month US$150 envelope, weekly charges review and 2–4 hours/week maintenance budget.
- [ ] Exercise creation/render throttles while retaining ordinary reads; verify available provider-side budget controls and state their limits without treating alerts as a hard billing cap.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Injected provider/render/cleanup failures are visible without secrets; limits reject excess work with useful errors; current service-cost evidence includes usage/tax/backup assumptions.

**Checks:** pnpm test:integration -- tests/integration/operations.test.ts; run operational probes with simulated failures and inspect sanitized output.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Local instrumentation and actual service/notification configuration can be separate sessions. Paid upgrades and sending alerts to others require existing authorization.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C26 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C26-operational-monitoring-and-spend-controls.md,
the C26 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C26.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
