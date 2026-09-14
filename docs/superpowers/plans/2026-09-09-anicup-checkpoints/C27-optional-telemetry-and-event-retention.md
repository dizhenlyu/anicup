# C27: Optional telemetry and event retention Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Allowlisted deduplicated events using separate optional analytics identifiers, opt-out, coverage reporting, and 30-day raw retention with irreversible daily aggregates.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §7/events; Product §§7, 9/measurement.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M6\
**Prerequisites:** [C16](C16-knockout-play-and-private-result-journey.md), [C20](C20-public-cards-qr-and-share-controls.md), [C24](C24-request-time-retention-and-daily-cleanup.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/server/analytics/{events,record,aggregate}.ts; src/app/api/events/route.ts; src/lib/analytics-client.ts; additive analytics migration; tests/integration/analytics-events.test.ts; docs/analytics.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C13 transactional lock/first-completion timestamps, C17 publication and C20 share callbacks; C24 cleanup registry.

**Produces:** Allowlisted deduplicated events using separate optional analytics identifiers, opt-out, coverage reporting, and 30-day raw retention with irreversible daily aggregates.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Record landing_view, draft_created, candidate_replaced, field_locked, group_confirmed, knockout_started, cup_first_completed, result_published, link_copied, image_downloaded and native_share_completed.
- [ ] Wire transactional dedupe for server events and fallible client evidence; accept no per-title preferences, raw IPs, secrets, full query strings or arbitrary properties.
- [ ] Keep play functional when analytics are disabled, expose the setting and region-policy configuration, and complete cleanup/aggregation before dropping raw identifiers. Reserve human-view/referral events for C28.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Retry/undo/recompletion cannot inflate first completion; native-share dismissal is not success; opting out stores no optional ID/events; cleanup removes raw identifiers after 30 days.

**Checks:** pnpm test:integration -- tests/integration/analytics-events.test.ts tests/integration/retention.test.ts; rerun private-cup journey with analytics disabled.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Event storage/transaction hooks and client opt-out/retention wiring can be separate continuations, with telemetry disabled until privacy behavior passes.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C27 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C27-optional-telemetry-and-event-retention.md,
the C27 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C27.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
