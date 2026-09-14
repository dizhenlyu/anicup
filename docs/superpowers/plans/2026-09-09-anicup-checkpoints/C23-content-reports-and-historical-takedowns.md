# C23: Content reports and historical takedowns Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Structured result/media reporting and a live availability overlay applied consistently to drafts, progress, public HTML and assets.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§4/denylist, 5/reports, 9/M5; Product §6.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M5\
**Prerequisites:** [C18](C18-public-result-lifecycle-and-deletion-routes.md), [C20](C20-public-cards-qr-and-share-controls.md), [C22](C22-bounded-provider-sync-and-safe-cover-fetching.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/operations/{reports,denylist}.ts; src/app/api/reports/route.ts; scripts/moderate-content.ts; additive reports/denylist migration; tests/integration/content-removal.test.ts; docs/content-operations.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C18 visibility guard, C20 image routes and C21 catalog identifiers.

**Produces:** Structured result/media reporting and a live availability overlay applied consistently to drafts, progress, public HTML and assets.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Accept only existing Cup/media references and predefined reasons; enforce 5 reports/IP-derived bucket/hour without public text or fetch URLs.
- [ ] Apply art-only placeholder removal; skip denylisted draft reserves; pause identity-prohibited in-progress Cups and offer restart without changing decisions.
- [ ] Redact or withdraw published results and purge affected images/caches; document maintainer dispositions and two-business-day first-review target.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** One takedown affects owner/public/OG/PNG views consistently; no replacement contestant appears in history; abusive reports cannot fetch arbitrary addresses.

**Checks:** pnpm test:integration -- tests/integration/content-removal.test.ts; manually inspect owner/public/title-only views.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Reporting and takedown propagation may be split, but full historical visibility proof is required before C23 is done.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C23 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C23-content-reports-and-historical-takedowns.md,
the C23 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C23.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
