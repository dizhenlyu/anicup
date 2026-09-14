# C01: Data feasibility and permitted-use decision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A dated field-by-field metadata/artwork policy, a reviewed sample with franchise/debut/safety provenance, a count-backed assessment of whether 48 eligible franchises are feasible, and an explicit permitted / title-only / blocked decision.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§1, 3.1, 9/M0; Product §§5–6, 12.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M0\
**Prerequisites:** None; use the existing planning baseline.\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** docs/data-use.md; docs/research/eligibility-audit.md; docs/research/curation-format.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** The existing category and retention rules; current primary provider documentation.

**Produces:** A dated field-by-field metadata/artwork policy, a reviewed sample with franchise/debut/safety provenance, a count-backed assessment of whether 48 eligible franchises are feasible, and an explicit permitted / title-only / blocked decision.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [x] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [x] Audit a bounded candidate sample and document sources, review decisions, ambiguity exclusions, and the remaining curation workload; distinguish candidates from approved entries.
- [x] Check current provider terms for retrieval, cache, per-Cup snapshots, artwork display and export. Record the applicable policy and unresolved questions; prepare clarification text if needed.
- [x] Record which fixture work may proceed and which real-data gate remains blocked. Do not send clarification or recruit participants without authorization.
- [x] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [x] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Every sample row has a source and decision; policy covers the proposed two cache versions / 14 days and per-Cup lifetime. No unreceived permission is described as granted.

**Checks:** Review the three documents against Product §§5–6 and record the evidence URLs and audit date.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Provider research and franchise audit can be separate visits. External clarification is an evidence dependency, not a reason to keep a session open.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C01 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C01-data-feasibility-and-permitted-use-decision.md,
the C01 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C01.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
