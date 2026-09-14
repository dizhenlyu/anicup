# C07: Versioned domain contracts and seeded randomness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** Validated CandidateSnapshot/CupState/DomainCommand contracts and deterministic unbiased shuffle primitives with a documented encoding/version.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§2, 3.1–3.2, 4/state document; Product §5.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M2\
**Prerequisites:** [C02](C02-runnable-fixture-application.md), [C03](C03-group-format-prototype-and-research-decision.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** src/domain/tournament/{types,schema,random}.ts; tests/domain/random.test.ts; tests/fixtures/shuffle-golden.json; docs/contracts/tournament.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** Original candidate fixtures, C03's recorded keep/revise decision and the versioned frozen-state requirements. If the format changes, update the normative rules before implementing their contracts.

**Produces:** Validated CandidateSnapshot/CupState/DomainCommand contracts and deterministic unbiased shuffle primitives with a documented encoding/version.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Define the discriminated state/command types and schema/rules/shuffle version fields. Reject corrupt or unsupported documents explicitly.
- [ ] Implement a seeded HMAC-SHA256 counter stream with canonical ID ordering, rejection-sampled bounded integers, and separate field/group labels.
- [ ] Fix encoding, endianness and byte consumption in independently checked golden fixtures; expose only pure domain imports.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Identical inputs reproduce fixtures in Node and browser Web Crypto; rejection branch and awkward bounds are tested; React/database/provider imports are absent.

**Checks:** pnpm exec vitest run tests/domain/random.test.ts; pnpm typecheck; compare browser and Node golden output.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Schema contracts and cross-runtime randomness are independent review units if needed. Do not add tournament progression in this session.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C07 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C07-versioned-domain-contracts-and-seeded-randomness.md,
the C07 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C07.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
