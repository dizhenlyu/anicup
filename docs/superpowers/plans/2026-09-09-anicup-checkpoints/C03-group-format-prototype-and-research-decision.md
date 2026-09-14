# C03: Group-format prototype and research decision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A non-production fixture comparison with replacement and explicit rank controls, a counterbalanced observation protocol, and a keep/revise decision when real observations are available.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §9/M0; Product §§4, 9/formative research.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M0\
**Prerequisites:** [C02](C02-runnable-fixture-application.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/app/research/page.tsx; src/components/research/format-comparison.tsx; docs/research/format-protocol.md; docs/research/format-decision.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C02 original fixtures; the proposed eight-group and plain 32-entry knockout comparison.

**Produces:** A non-production fixture comparison with replacement and explicit rank controls, a counterbalanced observation protocol, and a keep/revise decision when real observations are available.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Build a disposable fixture comparison; label it research-only and exclude it from public production routes.
- [ ] Write observation tasks for recognition, replacement, rank errors, mobile readability, completion time, and voluntary sharing with comparable familiar fields.
- [ ] Record anonymized observations from 8–12 target fans where available. Keep participant identities and consent records outside the repository; revise normative rules before implementing a different format.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Both prototype flows are usable; observations are identified as observed, unavailable, or incomplete. A prepared protocol alone does not satisfy the formative-research launch gate.

**Checks:** Manually exercise both flows with keyboard and narrow viewport; review the actual observation record before marking the research decision complete.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Prototype delivery and later evidence review are separate sessions. If participants are unavailable, mark awaiting-evidence and continue infrastructure or fixture work.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C03 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C03-group-format-prototype-and-research-decision.md,
the C03 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C03.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
