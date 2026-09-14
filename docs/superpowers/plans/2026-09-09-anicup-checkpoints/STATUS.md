# Checkpoint status

Baseline: `8118287` on `main`. C01/C02 implementation is on `codex/c1-c2-fixture-foundation`; implementation is recorded in this branch’s commit history. Later checkpoints remain planning material.

Statuses: **not-started**, **in-progress**, **awaiting-evidence**, **done**. Handoff files are created when execution occurs. Do not mark source milestones complete solely because a plan exists.

| Checkpoint | Milestone | Status | Commit / handoff / evidence |
| --- | --- | --- | --- |
| [C01: Data feasibility and permitted-use decision](C01-data-feasibility-and-permitted-use-decision.md) | M0 | done | [C01 handoff](handoffs/C01.md): blocked live-data decision; 52 provisional / 0 approved; reviewed 2026-09-10 |
| [C02: Runnable fixture application](C02-runnable-fixture-application.md) | M1 | done | [C02 handoff](handoffs/C02.md): frozen install, lint/typecheck, 2 tests, build and browser verified; reviewed 2026-09-10 |
| [C03: Group-format prototype and research decision](C03-group-format-prototype-and-research-decision.md) | M0 | not-started | No execution evidence |
| [C04: Image and cookie runtime feasibility](C04-image-and-cookie-runtime-feasibility.md) | M0 | not-started | No execution evidence |
| [C05: Local PostgreSQL and fixture CI](C05-local-postgresql-and-fixture-ci.md) | M1 | not-started | No execution evidence |
| [C06: Deployment promotion and migration gate](C06-deployment-promotion-and-migration-gate.md) | M1 | not-started | No execution evidence |
| [C07: Versioned domain contracts and seeded randomness](C07-versioned-domain-contracts-and-seeded-randomness.md) | M2 | not-started | No execution evidence |
| [C08: Draft replacement and field lock engine](C08-draft-replacement-and-field-lock-engine.md) | M2 | not-started | No execution evidence |
| [C09: Group ranking and fixed bracket seeding](C09-group-ranking-and-fixed-bracket-seeding.md) | M2 | not-started | No execution evidence |
| [C10: Knockout decisions, undo and result projection](C10-knockout-decisions-undo-and-result-projection.md) | M2 | not-started | No execution evidence |
| [C11: Guest ownership and request security boundary](C11-guest-ownership-and-request-security-boundary.md) | M3 | not-started | No execution evidence |
| [C12: Persisted draft creation and owner resume API](C12-persisted-draft-creation-and-owner-resume-api.md) | M3 | not-started | No execution evidence |
| [C13: Atomic commands and retry-safe persistence](C13-atomic-commands-and-retry-safe-persistence.md) | M3 | not-started | No execution evidence |
| [C14: Landing, draft review and saved field UI](C14-landing-draft-review-and-saved-field-ui.md) | M3 | not-started | No execution evidence |
| [C15: Accessible group-ranking UI](C15-accessible-group-ranking-ui.md) | M3 | not-started | No execution evidence |
| [C16: Knockout play and private result journey](C16-knockout-play-and-private-result-journey.md) | M3 | not-started | No execution evidence |
| [C17: Publication and recoverable deletion capability](C17-publication-and-recoverable-deletion-capability.md) | M4 | not-started | No execution evidence |
| [C18: Public result lifecycle and deletion routes](C18-public-result-lifecycle-and-deletion-routes.md) | M4 | not-started | No execution evidence |
| [C19: Private result PNG download](C19-private-result-png-download.md) | M4 | not-started | No execution evidence |
| [C20: Public cards, QR and share controls](C20-public-cards-qr-and-share-controls.md) | M4 | not-started | No execution evidence |
| [C21: Reviewed catalog validation and atomic activation](C21-reviewed-catalog-validation-and-atomic-activation.md) | M5 | not-started | No execution evidence |
| [C22: Bounded provider sync and safe cover fetching](C22-bounded-provider-sync-and-safe-cover-fetching.md) | M5 | not-started | No execution evidence |
| [C23: Content reports and historical takedowns](C23-content-reports-and-historical-takedowns.md) | M5 | not-started | No execution evidence |
| [C24: Request-time retention and daily cleanup](C24-request-time-retention-and-daily-cleanup.md) | M5 | not-started | No execution evidence |
| [C25: Encrypted backup and deletion-safe restore](C25-encrypted-backup-and-deletion-safe-restore.md) | M5 | not-started | No execution evidence |
| [C26: Operational monitoring and spend controls](C26-operational-monitoring-and-spend-controls.md) | M5 | not-started | No execution evidence |
| [C27: Optional telemetry and event retention](C27-optional-telemetry-and-event-retention.md) | M6 | not-started | No execution evidence |
| [C28: Measured human visits and referral attribution](C28-measured-human-visits-and-referral-attribution.md) | M6 | not-started | No execution evidence |
| [C29: Cohort metrics and experiment report](C29-cohort-metrics-and-experiment-report.md) | M6 | not-started | No execution evidence |
| [C30: Accessibility and real-device acceptance](C30-accessibility-and-real-device-acceptance.md) | M6 | not-started | No execution evidence |
| [C31: Performance and failure-recovery rehearsal](C31-performance-and-failure-recovery-rehearsal.md) | M6 | not-started | No execution evidence |
| [C32: Release evidence and self-host handoff](C32-release-evidence-and-self-host-handoff.md) | M6 | not-started | No execution evidence |
| [C33: Four-week pilot and evidence-based decision](C33-four-week-pilot-and-evidence-based-decision.md) | M6 | not-started | No execution evidence |

## External gates

| Gate | Evidence owner | Current state |
| --- | --- | --- |
| Metadata retention/artwork basis and >=48 reviewed eligible entries | C01, C21, C22 | Blocked: C01 records 52 provisional candidates, 0 approved; permissions and human review outstanding |
| Formative group-format decision with real observations | C03 | Unverified |
| Target host image/cookie compatibility | C04 | Unverified |
| Failed/missing/pending checks and migrations block promotion | C06 | Unverified |
| Real-phone QR and mobile/assistive-technology checks | C20, C30 | Unverified |
| Authenticated cleanup, daily backups, restore/deletion replay, cost controls | C24, C25, C26 | Unverified |
| Complete public-launch checklist and authorized release | C32 | Unverified |
| Four-week pilot and mature-cohort decision | C33 | Not begun |
