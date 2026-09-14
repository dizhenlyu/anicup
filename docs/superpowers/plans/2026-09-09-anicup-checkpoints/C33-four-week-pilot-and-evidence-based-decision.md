# C33: Four-week pilot and evidence-based decision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** An honest pilot report and continue / one bounded revision / pause recommendation; no expansion is automatically authorized.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§9/M6, 11; Product §§9–10.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M6\
**Prerequisites:** [C32](C32-release-evidence-and-self-host-handoff.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** docs/research/pilot-protocol.md; docs/research/pilot-report.md; private consented research records outside the repository.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** Authorized launch, C29 verified report, operational budget/safety monitoring and actual cohort data.

**Produces:** An honest pilot report and continue / one bounded revision / pause recommendation; no expansion is automatically authorized.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Prepare a four-week pilot seeking 200 distinct measured sessions with a first locked Cup through permitted channels; record actual sample/coverage and weekly operational cost.
- [ ] Use brief separate review sessions during the pilot and a final analysis session after relevant cohorts mature; allow up to 15 days for referral closure. Do not keep a context open for four weeks.
- [ ] Apply >=70% field acceptance, >=55% completion and >=15% share intent with no safety/reliability/budget breach; below 50% acceptance or 35% completion pauses distribution. Intermediate outcomes justify one focused revision; two unsuccessful pilots or unaffordable/unlawful operation justify pausing.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Report numerators/denominators, 95% Wilson intervals where valid, incomplete windows, <100-visitor conversion uncertainty, sample shortfall and maintenance hours; no observations or acquisition results are invented.

**Checks:** Run C29 report against authorized data and compare the written decision to Product §9 thresholds and §10 budget.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

This checkpoint is explicitly a protocol session, short evidence sessions and final analysis, separated by real calendar time. Reminders, recruitment and announcements require the user's authorization.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C33 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C33-four-week-pilot-and-evidence-based-decision.md,
the C33 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C33.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
