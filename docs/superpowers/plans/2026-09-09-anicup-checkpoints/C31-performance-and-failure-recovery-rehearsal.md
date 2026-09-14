# C31: Performance and failure-recovery rehearsal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Measured first-screen/save budgets and a failure-recovery report under 20 concurrently active Cups.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§9/M6, 10; Product §12.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M6\
**Prerequisites:** [C25](C25-encrypted-backup-and-deletion-safe-restore.md), [C26](C26-operational-monitoring-and-spend-controls.md), [C29](C29-cohort-metrics-and-experiment-report.md), [C30](C30-accessibility-and-real-device-acceptance.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** scripts/load-pilot.ts; tests/integration/failure-recovery.test.ts; docs/evidence/performance-resilience.md; narrowly affected modules.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** Complete application, stubbed upstream provider, real database and documented mobile/load profile.

**Produces:** Measured first-screen/save budgets and a failure-recovery report under 20 concurrently active Cups.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Measure usable first screen against three seconds and p95 saved-choice acknowledgment against one second under the stated pilot load/profile.
- [ ] Inject lost responses, simultaneous votes, provider outage, depleted pool, render failure and cleanup lag; record mutation reliability and recovered canonical state.
- [ ] Fix only failures reproduced by the rehearsal; verify revoked/expired assets, restored deletion suppression and data isolation through the critical path.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Measurements include environment, sample sizes, percentiles and any failed targets; 20-Cup load is not described as internet-scale proof.

**Checks:** Run the documented load profile; pnpm test:integration -- tests/integration/failure-recovery.test.ts; rerun only affected regression suites.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Baseline measurement and individual bottleneck/fault fixes should be separate sessions when needed; never hide a failed budget as complete.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C31 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C31-performance-and-failure-recovery-rehearsal.md,
the C31 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C31.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
