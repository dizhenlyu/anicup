# C02: Runnable fixture application Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A fresh-clone application serving an English, dark-first, title-only fixture landing page without provider or hosted-service credentials.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§1–2, 8/configuration, 9/M1; Product §§4, 11.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M1\
**Prerequisites:** None; use the existing planning baseline.\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** package.json; pnpm-lock.yaml; Node version file; Next/TypeScript/Tailwind configuration; src/app/{layout,page}.tsx; src/messages/en.ts; tests/fixtures/candidates.ts; .env.example; .gitignore; LICENSE; README.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** One Next.js application, synthetic data, AGPL-3.0-only code license.

**Produces:** A fresh-clone application serving an English, dark-first, title-only fixture landing page without provider or hosted-service credentials.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [x] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [x] Resolve supported compatible package versions, pin Node/pnpm, and install one lockfile. Establish lint, typecheck, build, and Vitest scripts.
- [x] Add at least 64 original candidate fixtures, with distinct IDs/franchise keys and explicit fixture provenance; add category copy and source link.
- [x] Document local startup and harmless configuration names; keep secrets out of client imports and add the specified source license and third-party notice boundary.
- [x] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [x] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Install from the lockfile, build, and open the fixture page with external credentials unset; no anime artwork is bundled.

**Checks:** pnpm install --frozen-lockfile; pnpm lint; pnpm typecheck; pnpm build; manually open the local page.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

If dependency/runtime setup consumes the work budget, finish the runnable page and record fixture/documentation completion as a continuation; do not start database work.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C02 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C02-runnable-fixture-application.md,
the C02 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C02.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
