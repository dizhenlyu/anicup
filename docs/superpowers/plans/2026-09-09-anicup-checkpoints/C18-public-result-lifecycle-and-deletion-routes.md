# C18: Public result lifecycle and deletion routes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Explicit publish/recovery UI, safe unlisted HTML and owner/recovery deletion using a shared visibility guard for later assets.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§4–6/public projection, deletion, visibility; Product §§7–8.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M4\
**Prerequisites:** [C16](C16-knockout-play-and-private-result-journey.md), [C17](C17-publication-and-recoverable-deletion-capability.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/sharing/{visibility,projection,delete}.ts; src/app/api/cups/[id]/publish/route.ts; src/app/api/cups/[id]/route.ts; src/app/api/results/[publicId]/delete/route.ts; src/app/c/[publicId]/page.tsx; additive tombstone migration; tests/integration/result-lifecycle.test.ts; tests/e2e/publication.spec.ts.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C17 publication/recovery and C10 result projection; C11 rate/security boundary.

**Produces:** Explicit publish/recovery UI, safe unlisted HTML and owner/recovery deletion using a shared visibility guard for later assets.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Wire publish explanation, one-time code display/download and owner-only re-retrieval; show expiry and a new-random-Cup CTA.
- [ ] Strip owner/session/recovery/analytics/private fields; apply noindex/sitemap exclusion, restrictive referrers and request-time published/unexpired/permitted checks.
- [ ] Delete any owned Cup or a published result with its recovery code, remove receipts/private data, write minimal backup-window tombstones and revoke all projection paths. Rate-limit failed recovery; use no-store until cache revocation is proven.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Anonymous users see only published safe projections; code grants deletion only; deletion and expiry yield generic unavailable HTML and deny later asset access; recovery never enters URLs/logs.

**Checks:** pnpm test:integration -- tests/integration/result-lifecycle.test.ts; pnpm exec playwright test tests/e2e/publication.spec.ts; pnpm typecheck.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Visibility/deletion services and route/UI wiring are separate continuations if needed; no public exposure until all lifecycle checks pass.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C18 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C18-public-result-lifecycle-and-deletion-routes.md,
the C18 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C18.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
