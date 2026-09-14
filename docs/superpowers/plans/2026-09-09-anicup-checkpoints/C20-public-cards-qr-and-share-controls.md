# C20: Public cards, QR and share controls Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Distinct 1200×630 OG and legible download layouts, copy/native-share controls and optional QR resolving to the exact unlisted URL.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§5/assets, 6/sharing; Product §8.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M4\
**Prerequisites:** [C18](C18-public-result-lifecycle-and-deletion-routes.md), [C19](C19-private-result-png-download.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/sharing/{og-card,public-card}.tsx; src/app/c/[publicId]/{og.png,share.png}/route.ts; src/components/share-controls.tsx; tests/integration/public-image.test.ts; tests/e2e/share.spec.ts; docs/evidence/qr.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C18 visibility/deletion guard and C19 bounded renderer.

**Produces:** Distinct 1200×630 OG and legible download layouts, copy/native-share controls and optional QR resolving to the exact unlisted URL.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Render only canonical permitted projections and repeat visibility checks on every request; cap renders and use no-store unless revocation is verified.
- [ ] Use configured APP_ORIGIN and allowlisted src=qr marker; never embed owner/recovery data or expose a bypass blob URL.
- [ ] Add native-share support/fallback and truthful cancellation behavior; decode QR after social downscaling and on an actual phone.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** HTML/OG/PNG agree; deleted/expired results cannot be served through asset paths; downscaled QR decodes exactly; image failure leaves link sharing usable.

**Checks:** pnpm test:integration -- tests/integration/public-image.test.ts; pnpm exec playwright test tests/e2e/share.spec.ts; record actual phone QR evidence.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Public image routes and share-control/device verification may take separate sessions; missing phone evidence stays explicitly pending.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C20 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C20-public-cards-qr-and-share-controls.md,
the C20 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C20.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
