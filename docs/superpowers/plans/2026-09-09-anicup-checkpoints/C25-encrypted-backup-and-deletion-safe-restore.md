# C25: Encrypted backup and deletion-safe restore Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute this checkpoint in a fresh session. Steps use checkbox syntax. Read [SESSION.md](SESSION.md) first; the user's below-40% context constraint takes precedence over batching additional checkpoints.

**Goal:** A rehearsed daily encrypted backup and isolated restore procedure with at most 30-day retention and deletion replay before traffic.

**Architecture:** Preserve the single-app/domain/server boundaries in the source plan. This is a bounded delivery checkpoint; create detailed code-level steps only for this scope after inspecting the prerequisite implementation.

**Tech Stack:** Next.js, TypeScript, Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest and Playwright where relevant; select compatible supported versions in C02.

**Spec:** [Product specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md) and [Implementation v1](../../../../implementation%20plan%20v1.md). Read only: Implementation §8/backups; Product §7/backup retention.

**Global Constraints:** Guest-only; English; category `anime-2020s`; original fixtures until live-data clearance; no scope expansion. Full shared constraints and context stop rules are in [SESSION.md](SESSION.md).

---

**Milestone:** M5\
**Prerequisites:** [C24](C24-request-time-retention-and-daily-cleanup.md)\
**Initial status:** Not started; [STATUS.md](STATUS.md) is authoritative during execution.\
**Session size:** One focused implementation/evidence unit; use the continuation boundary below if the context budget requires it.

## Files and interfaces

**Proposed create/modify scope:** scripts/backup-db.sh; scripts/restore-db.sh; docs/backup-restore.md; docs/evidence/restore-rehearsal.md; backup schedule configuration.

Paths are proposals until their first implementation. Prefer the actual prerequisite exports and file names once they exist; record changes in the handoff instead of creating duplicate abstractions.

**Consumes:** C24 expiry/tombstone policy and a separately accessible deletion record source newer than the restored snapshot.

**Produces:** A rehearsed daily encrypted backup and isolated restore procedure with at most 30-day retention and deletion replay before traffic.

Record exact implemented signatures, request/response shapes, version fields and test commands in the checkpoint handoff so consumers need not read unrelated internals.

## Work checklist

- [ ] Verify prerequisite commit/evidence, inspect only the files above and relevant source-spec sections, and identify the smallest reviewable change.
- [ ] Implement encrypted export/restore using secret-store configuration, bounded retention and a documented current tombstone/deletion-record recovery source.
- [ ] Delete a fixture Cup after a backup, restore that older backup into a separate database, replay newer deletions and apply current expiry before opening traffic.
- [ ] Verify remaining result/owner isolation and record recovery-point target 24h and recovery-time target one business day; arrange affordable backups or keep the public pilot blocked.
- [ ] Verify the acceptance proof below; for code behavior, use focused regression/invariant tests and demonstrate the expected failure before the implementation where practical.
- [ ] Review the diff, update this checklist and STATUS.md, and save a concise handoff with actual verification evidence. Stop after this checkpoint.

## Acceptance and verification

**Required proof:** A post-backup deleted Cup never resurfaces; live results work for the correct owner; encryption/access/retention and restoration times are evidenced.

**Checks:** Execute the full isolated backup/delete/restore/replay/read rehearsal and attach sanitized commands, timestamps and assertions.

Commands are proposed until C02/C05 establish the scripts. Use the recorded equivalent when names differ; never claim a command ran if its script does not exist.

## Continuation boundary

Script delivery and hosted backup scheduling may be separate sessions. A backup file without a successful restore does not pass.

A continuation is not a completed checkpoint. Preserve the exact failing test, next action and outstanding acceptance criteria; do not start downstream work that depends on unfinished behavior.

## Fresh-session prompt

```text
Use Superpowers to execute only C25 in this repository.
Read docs/superpowers/plans/2026-09-09-anicup-checkpoints/SESSION.md,
then docs/superpowers/plans/2026-09-09-anicup-checkpoints/C25-encrypted-backup-and-deletion-safe-restore.md,
the C25 row in STATUS.md, and the handoffs for its direct prerequisites.
Read only the source-spec sections and implementation files needed for C25.
Keep total session context below 40%: aim to finish at 25–30%, begin
handoff at 30%, and stop by 35% if the context meter is available.
If exact context usage is unavailable, say so; use the bounded scope
and do not claim the cap was enforced. Run focused verification, record
the result and handoff, then stop. Do not execute another checkpoint.
```
