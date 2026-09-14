# C04: Image and cookie runtime feasibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A reproducible title-only 1200×630 PNG and cookie persistence probe, with a runtime/font/hosting compatibility decision.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§5/owner cookie, 6/image generation, 9/M0; Product §§7–8.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M0\
**Prerequisites:** [C02](C02-runnable-fixture-application.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** scripts/spikes/render-fixture.ts; tests/spikes/cookie-persistence.spec.ts; docs/research/runtime-feasibility.md; licensed test font assets and notices.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C02 Node runtime and original fixtures; intended preview and production environments when accessible.

**Produces:** A reproducible title-only 1200×630 PNG and cookie persistence probe, with a runtime/font/hosting compatibility decision.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Render a fixed fixture card using a supported Node SVG-to-PNG path and licensed fonts; include long English, romaji, and native-script titles.
- [ ] Probe server-set HttpOnly/Secure/SameSite=Lax cookies across reload/reopen; allow Secure relaxation only on localhost.
- [ ] Record local versus real-environment evidence and current cost assumptions. Keep probes isolated from application behavior.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** PNG dimensions and text fallback are verified; cookie attributes and persistence are observed. Local success is not claimed as hosted success.

**Checks:** Run the rendering script and cookie probe; inspect the PNG; record runtime versions and any unavailable hosted checks.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Perform local probes first; validate the intended host in a later short evidence session if access is unavailable.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C04 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C04-image-and-cookie-runtime-feasibility.md,
the C04 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C04.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
