# C28: Measured human visits and referral attribution Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** result_human_view and referred_cup_locked with bounded first-eligible attribution and explicit unknown coverage.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §7/referral policy; Product §§8–9/measurement.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M6\
**Prerequisites:** [C27](C27-optional-telemetry-and-event-retention.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/analytics/referrals.ts; src/lib/result-engagement.ts; src/server/cups/create.ts; tests/integration/referrals.test.ts; tests/e2e/referrals.spec.ts; docs/analytics.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C27 optional analytics/session and C18 public result/new-random-Cup flow.

**Produces:** result_human_view and referred_cup_locked with bounded first-eligible attribution and explicit unknown coverage.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Require browser execution and visible engagement, exclude known bots/detectable owners, and dedupe per analytics session/result.
- [ ] Keep first eligible parent attribution for seven days only when measurement is permitted; consume on next Cup creation and persist parent/visit time before later lock.
- [ ] Validate direct CTA parent references; never grant ownership or reuse the parent field. Enforce parent visit <=7 days after parent first completion, child lock <=7 days after visit and child first completion <=24h after lock.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Owner/bot/duplicate/invisible visits do not count; opt-out gives unknown attribution; delayed locks retain the original visit; child field is newly randomized.

**Checks:** pnpm test:integration -- tests/integration/referrals.test.ts; pnpm exec playwright test tests/e2e/referrals.spec.ts.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Engagement qualification and creation-time attribution may be separate tested continuations.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C28 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C28-measured-human-visits-and-referral-attribution.md,
the C28 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C28.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
