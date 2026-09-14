# AniCup Checkpoint Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to execute one checkpoint per fresh session. Steps use checkbox syntax in individual checkpoint files. Follow the user's below-40% context constraint and SESSION.md.

**Goal:** Divide Implementation Plan v1 into independently reviewable deliveries that can be resumed across small-context sessions.

**Architecture:** Preserve the existing single application, pure tournament engine and server-owned lifecycle. Keep seven milestones for product-level review, with 33 smaller checkpoint packets for execution.

**Tech Stack:** Existing planned Next.js/TypeScript/Tailwind, Node, PostgreSQL/Drizzle, pnpm, Vitest/Playwright; versions resolved during setup.

**Spec:** [Implementation Plan v1](../../../../implementation%20plan%20v1.md) and [Business Plan & Product Specification](../../../../AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md).

## Global constraints

Product scope and release gates are unchanged. [SESSION.md](SESSION.md) contains shared rules, the context policy and the definition of a completed checkpoint. This is a delivery breakdown, not approval of new product behavior or a claim that implementation exists.

## How to use this plan

Start with [C01](C01-data-feasibility-and-permitted-use-decision.md) for feasibility; [C02](C02-runnable-fixture-application.md) is also ready if you want to start fixture engineering. Open a fresh task and paste the prompt at the bottom of the selected checkpoint. Read only that packet, its cited spec sections and direct prerequisite handoffs.

Use **one checkpoint per session as the maximum**, not a promise of one-session completion. Aim to finish at 25–30% context; begin handoff at 30% and stop by 35%. The remaining margin protects the user's below-40% ceiling. Exact compliance requires observable context usage; this plan does not provide a hard limiter.

Every checkpoint specifies proposed files, inputs/outputs, a work checklist, acceptance proof, verification, a continuation boundary and a copyable prompt. Names remain proposals until implemented; producer handoffs preserve the actual interface for later sessions.

Research recruitment, provider clearance, real devices and hosted rehearsals require external evidence. C33 explicitly spans real calendar time and several short sessions. Do not leave a single session running through these waits.

## Milestone map

| Original milestone | Checkpoints | Completed delivery |
| --- | --- | --- |
| M0 | C01, C03–C04 | Feasibility decisions and research/runtime evidence |
| M1 | C02, C05–C06 | Runnable fixture app, database/CI and proven promotion gates |
| M2 | C07–C10 | Deterministic tournament library with independent invariant tests |
| M3 | C11–C16 | Secure persisted guest Cup from draft to private result |
| M4 | C17–C20 | Publication/recovery/deletion plus private/public image sharing |
| M5 | C21–C26 | Reviewed catalog, provider/takedown behavior, retention/restore/operations |
| M6 | C27–C33 | Measurement, accessibility, resilience, release and pilot decision |

The original 21–34 focused engineering days, or 26–41 with contingency, remain the baseline estimate. Thirty-three checkpoints are not 33 days or a launch-date promise. Re-estimate after M0 and the private guest journey. Detailed implementation steps are expanded only for the checkpoint about to run, using the code that then exists.

## Checkpoint order and dependencies

Numeric order is a valid default. Only the listed prerequisite set is required; independent work can proceed when external gates are waiting. Dependencies mean the actual code/contract is available in the checkout. External gate evidence remains required for release even when fixture work proceeds.

| ID | Reviewable output | Needs |
| --- | --- | --- |
| [C01](C01-data-feasibility-and-permitted-use-decision.md) | Data feasibility and permitted-use decision | Planning baseline |
| [C02](C02-runnable-fixture-application.md) | Runnable fixture application | Planning baseline |
| [C03](C03-group-format-prototype-and-research-decision.md) | Group-format prototype and research decision | C02 |
| [C04](C04-image-and-cookie-runtime-feasibility.md) | Image and cookie runtime feasibility | C02 |
| [C05](C05-local-postgresql-and-fixture-ci.md) | Local PostgreSQL and fixture CI | C02 |
| [C06](C06-deployment-promotion-and-migration-gate.md) | Deployment promotion and migration gate | C04, C05 |
| [C07](C07-versioned-domain-contracts-and-seeded-randomness.md) | Versioned domain contracts and seeded randomness | C02, C03 |
| [C08](C08-draft-replacement-and-field-lock-engine.md) | Draft replacement and field lock engine | C07 |
| [C09](C09-group-ranking-and-fixed-bracket-seeding.md) | Group ranking and fixed bracket seeding | C08 |
| [C10](C10-knockout-decisions-undo-and-result-projection.md) | Knockout decisions, undo and result projection | C09 |
| [C11](C11-guest-ownership-and-request-security-boundary.md) | Guest ownership and request security boundary | C05 |
| [C12](C12-persisted-draft-creation-and-owner-resume-api.md) | Persisted draft creation and owner resume API | C08, C11 |
| [C13](C13-atomic-commands-and-retry-safe-persistence.md) | Atomic commands and retry-safe persistence | C10, C12 |
| [C14](C14-landing-draft-review-and-saved-field-ui.md) | Landing, draft review and saved field UI | C13 |
| [C15](C15-accessible-group-ranking-ui.md) | Accessible group-ranking UI | C14 |
| [C16](C16-knockout-play-and-private-result-journey.md) | Knockout play and private result journey | C15 |
| [C17](C17-publication-and-recoverable-deletion-capability.md) | Publication and recoverable deletion capability | C13 |
| [C18](C18-public-result-lifecycle-and-deletion-routes.md) | Public result lifecycle and deletion routes | C16, C17 |
| [C19](C19-private-result-png-download.md) | Private result PNG download | C04, C16 |
| [C20](C20-public-cards-qr-and-share-controls.md) | Public cards, QR and share controls | C18, C19 |
| [C21](C21-reviewed-catalog-validation-and-atomic-activation.md) | Reviewed catalog validation and atomic activation | C01, C05, C07 |
| [C22](C22-bounded-provider-sync-and-safe-cover-fetching.md) | Bounded provider sync and safe cover fetching | C21 |
| [C23](C23-content-reports-and-historical-takedowns.md) | Content reports and historical takedowns | C18, C20, C22 |
| [C24](C24-request-time-retention-and-daily-cleanup.md) | Request-time retention and daily cleanup | C18, C21 |
| [C25](C25-encrypted-backup-and-deletion-safe-restore.md) | Encrypted backup and deletion-safe restore | C24 |
| [C26](C26-operational-monitoring-and-spend-controls.md) | Operational monitoring and spend controls | C20, C22, C24 |
| [C27](C27-optional-telemetry-and-event-retention.md) | Optional telemetry and event retention | C16, C20, C24 |
| [C28](C28-measured-human-visits-and-referral-attribution.md) | Measured human visits and referral attribution | C27 |
| [C29](C29-cohort-metrics-and-experiment-report.md) | Cohort metrics and experiment report | C28 |
| [C30](C30-accessibility-and-real-device-acceptance.md) | Accessibility and real-device acceptance | C20, C23, C28 |
| [C31](C31-performance-and-failure-recovery-rehearsal.md) | Performance and failure-recovery rehearsal | C25, C26, C29, C30 |
| [C32](C32-release-evidence-and-self-host-handoff.md) | Release evidence and self-host handoff | C01, C03, C04, C06, C21, C22, C23, C24, C25, C26, C29, C30, C31 |
| [C33](C33-four-week-pilot-and-evidence-based-decision.md) | Four-week pilot and evidence-based decision | C32 |

## Useful work streams

- **Feasibility:** C01 plus C02 → C03/C04. C03's keep/revise decision gates C07–C10 so final rules inform the engine. While observations are unavailable, foundation and runtime work can continue. A provider delay alone does not block fixture engineering.
- **Foundation:** C02 → C05 → C06, with C04's host findings feeding C06.
- **Private play:** C07 → C08 → C09 → C10, alongside C05 → C11; then C12 → C13 → C14 → C15 → C16.
- **Sharing:** C13 → C17; C16 + C17 → C18; C04 + C16 → C19; C18 + C19 → C20.
- **Catalog:** C01 + C05 + C07 → C21 → C22. This can progress while private play is built.
- **Operations:** C18 + C21 → C24 → C25; C20 + C22 + C24 → C26. C23 needs public projections, images and provider identity handling.
- **Measurement/release:** C16 + C20 + C24 → C27 → C28 → C29; C30 and C31 collect acceptance evidence; C32 reconciles all gates; C33 runs the pilot.

These are scheduling options for separate sessions, not instructions to launch concurrent agents. Keep shared migrations/contracts under one writer or integrate isolated work explicitly.

## Coverage of the source plan

| Source requirement | Checkpoints |
| --- | --- |
| §1 scope and §2 architecture / open-source setup | C02, C05, SESSION.md, C32 |
| §3.1 pool/random/replacement/lock | C01, C07–C08, C21–C22 |
| §3.2 group/bracket/undo/results/versioning | C07–C10 |
| §4 ownership/state/receipts/pools/lifecycle | C05, C11–C13, C17–C18, C21, C23–C25, C27 |
| §5 HTTP/security/limits/recovery/assets | C11–C13, C17–C20, C22–C24, C26 |
| §6 guest UX, persistence, images/accessibility | C03–C04, C14–C16, C18–C20, C30 |
| §7 events/cohorts/referrals/retention | C13, C24, C27–C29, C33 |
| §8 CI/CD/self-hosting/backup/provider/cost | C02, C04–C06, C21–C22, C24–C26, C32 |
| §9 M0–M6 and real evidence | Milestone map, STATUS.md external gates, C31–C33 |
| §10 verification matrix | Card acceptance proofs; full release run in C32 |
| §11 release/change control | C32–C33; preserve source specs when rules change |

## Tracking and resuming

[STATUS.md](STATUS.md) starts every checkpoint as not-started. Create a small handoff from [HANDOFF-TEMPLATE.md](HANDOFF-TEMPLATE.md) after each execution session. Use the same checkpoint ID for a continuation; downstream checkpoints wait for their required acceptance proof.

A changed file or successful happy path is not enough: record actual checks and remaining gates. If the context stop point arrives before verification, hand off the exact state as in-progress.
