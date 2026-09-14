# C11: Guest ownership and request security boundary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Server-only owner authentication, same-origin/CSRF validation and atomic configurable rate-limit helpers.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §5; Product §7.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M3\
**Prerequisites:** [C05](C05-local-postgresql-and-fixture-ci.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/sessions/{tokens,cookies,authorize}.ts; src/server/operations/rate-limits.ts; src/server/http/security.ts; additive rate_limit_buckets migration; tests/integration/sessions.test.ts; docs/contracts/http.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C05 guest_sessions table, trusted APP_ORIGIN and server-held key configuration.

**Produces:** Server-only owner authentication, same-origin/CSRF validation and atomic configurable rate-limit helpers.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Create 256-bit random owner secrets, hash at rest and set required cookie attributes; preserve dependent Cups through identifier-only expired-owner stubs.
- [ ] Enforce 30-day idle and 180-day absolute session limits, origin/CSRF validation even for initial creation, and indistinguishable unauthorized/unknown responses.
- [ ] Implement daily-keyed IP hashes with at most 24h retention, required starting limits, useful 429s, log redaction and private/no-store owner responses. Validate IDs/body-size limits, escape displayed titles, configure a practical CSP/restrictive referrers, and check client bundles/source maps for server secrets.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Cookie theft via response bodies/logs is absent; chosen session IDs and cross-origin mutations fail; expired sessions cannot authorize; rate increments are atomic without raw IP storage.

**Checks:** pnpm test:integration -- tests/integration/sessions.test.ts; pnpm typecheck.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Authentication and abuse-control helpers can be separate tested continuations; no unprotected Cup routes are exposed between them.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C11 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C11-guest-ownership-and-request-security-boundary.md,
the C11 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C11.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
