# C32: Release evidence and self-host handoff Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A release candidate with complete source/privacy/operations documents, a fresh-clone Node/PostgreSQL path and an evidence-linked launch decision.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §§8, 10–11; Product §§10–12.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M6\
**Prerequisites:** [C01](C01-data-feasibility-and-permitted-use-decision.md), [C03](C03-group-format-prototype-and-research-decision.md), [C04](C04-image-and-cookie-runtime-feasibility.md), [C06](C06-deployment-promotion-and-migration-gate.md), [C21](C21-reviewed-catalog-validation-and-atomic-activation.md), [C22](C22-bounded-provider-sync-and-safe-cover-fetching.md), [C23](C23-content-reports-and-historical-takedowns.md), [C24](C24-request-time-retention-and-daily-cleanup.md), [C25](C25-encrypted-backup-and-deletion-safe-restore.md), [C26](C26-operational-monitoring-and-spend-controls.md), [C29](C29-cohort-metrics-and-experiment-report.md), [C30](C30-accessibility-and-real-device-acceptance.md), [C31](C31-performance-and-failure-recovery-rehearsal.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** Dockerfile; README.md; CONTRIBUTING.md; CODE_OF_CONDUCT.md; SECURITY.md; docs/{privacy,rules,self-hosting,release-checklist}.md; docs/evidence/release.md.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** Checkpoint evidence, current tested commit and all external launch gates.

**Produces:** A release candidate with complete source/privacy/operations documents, a fresh-clone Node/PostgreSQL path and an evidence-linked launch decision.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Verify fixture installation/build/test in a fresh checkout plus Docker/self-host startup without AniList/Vercel/Supabase credentials; expose deployed-version source and all third-party notices.
- [ ] Run the complete required lint/type/domain/service/database/browser/build suite; recheck exact-commit promotion, migration compatibility, rollback and restore evidence for the release candidate.
- [ ] Audit every Product §12 gate, current costs, domain/service ownership, content/support contact and permitted launch channel. Prepare tag v0.1.0/release material only for the tested commit; report any failed or externally blocked gate.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** Each launch requirement links to observed evidence or an explicit blocker; no milestone is marked shipped solely from code or configuration.

**Checks:** Run documented fresh-clone/self-host commands and all CI-required checks; inspect the final diff and release checklist.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Packaging/docs and release-candidate verification may be separate sessions. Public promotion/announcement occurs only within user-authorized scope.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C32 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C32-release-evidence-and-self-host-handoff.md,
the C32 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C32.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
