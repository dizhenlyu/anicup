# C30: Accessibility and real-device acceptance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Evidence of keyboard and screen-reader completion plus iOS Safari/Android Chrome coverage, with focused fixes for observed failures.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§6/accessibility, 9/M6; Product §§4, 12.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M6\
**Prerequisites:** [C20](C20-public-cards-qr-and-share-controls.md), [C23](C23-content-reports-and-historical-takedowns.md), [C28](C28-measured-human-visits-and-referral-attribution.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** tests/e2e/accessibility.spec.ts; affected focused UI components; docs/evidence/accessibility-devices.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** Complete guest/public/title-only journeys and permitted original fixtures.

**Produces:** Evidence of keyboard and screen-reader completion plus iOS Safari/Android Chrome coverage, with focused fixes for observed failures.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Complete the entire Cup using keyboard and a screen reader; check rank/progress/error announcements and focus after save/undo.
- [ ] Check >=4.5:1 standard text contrast, practical >=44×44 CSS-pixel targets, reduced motion, non-color ranks and no horizontal decision reading at 320px.
- [ ] Exercise real iOS Safari and Android Chrome, title-only/broken covers, offline recovery and public sharing; clearly separate emulated results and unavailable devices.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** All named journeys pass on recorded browser/device versions; automated accessibility scans supplement actual keyboard/screen-reader evidence.

**Checks:** pnpm exec playwright test tests/e2e/accessibility.spec.ts; perform and record actual assistive-technology/mobile runs.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Desktop assistive-technology and each mobile platform can be separate evidence sessions. Missing hardware evidence remains open.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C30 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C30-accessibility-and-real-device-acceptance.md,
the C30 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C30.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
