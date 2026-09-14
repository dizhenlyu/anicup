# C24: Request-time retention and daily cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** One idempotent maintenance mechanism and a retention-policy registry shared by every request boundary.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§4–5/expiry and receipts, 8/retention; Product §7.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M5\
**Prerequisites:** [C18](C18-public-result-lifecycle-and-deletion-routes.md), [C21](C21-reviewed-catalog-validation-and-atomic-activation.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/operations/{retention,cleanup}.ts; scripts/cleanup.ts; one authenticated maintenance workflow/route; tests/integration/retention.test.ts; docs/retention.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C12 Cup expiry helper, C18 deletion/tombstones, C21 pool validity.

**Produces:** One idempotent maintenance mechanism and a retention-policy registry shared by every request boundary.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Enforce session 30-day idle/180-day absolute, inactive draft/progress 30 days since owner mutation, unpublished completion 30 days since latest completion, published 180 days from publish.
- [ ] Remove expired receipts with Cups, preserve owner stubs while needed, retain tombstones only for the 30-day backup window, expire rate hashes within 24h and purge pool content within policy.
- [ ] Test exact boundary times and failed/repeated cleanup; owner reads never renew Cup retention. Provide a registered 30-day analytics cleanup hook, completed with the analytics schema in C27.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Expired content is unavailable before the daily job runs; rerunning cleanup is safe; credentials/content disappear on schedule without breaking permitted dependents.

**Checks:** pnpm test:integration -- tests/integration/retention.test.ts with a fake clock; run cleanup twice on an ephemeral fixture database.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Request-time policy and cleanup scheduling can be separate continuations; deployment of the job needs actual authenticated execution evidence.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C24 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C24-request-time-retention-and-daily-cleanup.md,
the C24 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C24.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
