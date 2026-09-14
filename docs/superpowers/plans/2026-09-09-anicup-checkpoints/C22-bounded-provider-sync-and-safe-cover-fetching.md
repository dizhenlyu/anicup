# C22: Bounded provider sync and safe cover fetching Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** One narrow provider adapter with bounded retries, atomic pool activation and an HTTPS cover-fetch allowlist; fixture mode remains network-free.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§5/asset validation, 8/provider sync; Product §6.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M5\
**Prerequisites:** [C21](C21-reviewed-catalog-validation-and-atomic-activation.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/catalog/{anilist-adapter,sync,fetch-cover}.ts; scripts/sync-pool.ts; tests/integration/catalog-sync.test.ts; docs/catalog.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C21 review/activation contract, curated ID list and permitted-use policy.

**Produces:** One narrow provider adapter with bounded retries, atomic pool activation and an HTTPS cover-fetch allowlist; fixture mode remains network-free.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Fetch only curated IDs with a conservative 20 requests/minute ceiling, adapting downward to current Retry-After/rate headers; refresh at most weekly within the approved policy.
- [ ] Test 429/backoff, 403 shutdown, 5xx, timeout and GraphQL partial responses; never partially activate or extend expired permission during outages.
- [ ] Validate cover redirects, HTTPS hosts, MIME/bytes/time and private-network destinations; apply the same validation at each redirect. Keep title fallback when art is unavailable or unpermitted.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Provider outage preserves permitted locked snapshots, unavailable pools disable creation, forbidden cover targets fail, and votes cause no provider call.

**Checks:** pnpm test:integration -- tests/integration/catalog-sync.test.ts using a stubbed provider; run a bounded live smoke only with clearance.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Metadata sync and SSRF-safe cover fetch are separate testable continuations; keep production art disabled until the second is verified.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C22 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C22-bounded-provider-sync-and-safe-cover-fetching.md,
the C22 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C22.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
