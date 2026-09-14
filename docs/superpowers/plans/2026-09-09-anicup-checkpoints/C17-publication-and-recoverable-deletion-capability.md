# C17: Publication and recoverable deletion capability Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A server-only publication service producing one >=128-bit public ID and one 256-bit recovery capability, with immutable published decisions.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§4–5/publication; Product §7/publishing.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M4\
**Prerequisites:** [C13](C13-atomic-commands-and-retry-safe-persistence.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/sharing/{publish,recovery}.ts; src/server/cups/expiry.ts; additive publication migration; tests/integration/publication.test.ts; docs/contracts/sharing.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C13 atomic transaction/receipt boundary and completed Cup state.

**Produces:** A server-only publication service producing one >=128-bit public ID and one 256-bit recovery capability, with immutable published decisions.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Publish only completed owned Cups in one transaction; compute expiry 180 days after publication and enforce unique-ID collision retries.
- [ ] Derive the deletion code using a dedicated versioned HMAC key and publication identity; persist only its hash and retain key versions through affected result expiry.
- [ ] Make publication retries return the same capability to the authorized owner without plaintext storage; keep public HTTP exposure disabled until C18 supplies deletion and visibility.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Concurrent publication yields one result; lost-response retry preserves deletion capability; public IDs confer no ownership and published domain commands fail.

**Checks:** pnpm test:integration -- tests/integration/publication.test.ts; pnpm exec vitest run tests/domain; pnpm typecheck.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Keep this an independently tested service. Do not combine public presentation, cache or image rendering into this session.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C17 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C17-publication-and-recoverable-deletion-capability.md,
the C17 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C17.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
