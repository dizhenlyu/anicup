# AniCup — Implementation Plan v1

**Version:** 1.0

**Date:** September 8, 2026

**Status:** Execution specification; no implementation milestone is complete.

**Product authority:** [AniCup — Business Plan & Product Specification v1](AniCup%20%E2%80%94%20Business%20Plan%20%26%20Product%20Specification.md)

**Repository:** [dizhenlyu/anicup](https://github.com/dizhenlyu/anicup)

**Owner:** Repository maintainer, dizhenlyu

## 1. Delivery contract

Build a guest-only, English web app for one curated 2020s-debut anime category. A player reviews 32 random franchise entries, optionally replaces unfamiliar ones, locks the field, ranks two entrants from each of eight groups, makes 15 knockout choices, and optionally publishes an unlisted result. Implement reliable resume, ownership, deletion, bounded retention, and share controls in the same release.

The business plan's lean scope and US$50/month cap are planning defaults, not service-purchase authorization. The current repository has no application scaffold, database migrations, tests, CI, or deployment configuration. All paths below are proposed unless they name the two existing planning documents. This plan does not create infrastructure or commit secrets.

Do not add OAuth, user profiles, public result discovery, alternate categories, imports, custom fields, same-field challenges, payments, or Chinese translations. Use English message constants so localization later does not require reconstructing copy. V1 is an evidence-gathering release, not the one-year feature list.

Success means all acceptance criteria and release gates below are demonstrated. Implementation is not complete merely because a happy-path bracket renders.

## 2. Architecture and repository layout

Use one Next.js application with TypeScript and Tailwind; use native accessible controls or a small component library where useful. Run server-side database and image generation in the Node runtime. Use PostgreSQL with Drizzle migrations; Supabase supplies managed PostgreSQL initially, with no Supabase Auth dependency. Browser code calls same-origin app endpoints and never receives database or service credentials.

Select supported stable dependency versions when scaffolding, record the Node version and package manager, and commit one lockfile. Use pnpm with a frozen install in CI. Prefer Vitest for pure engine/service tests and Playwright for critical browser journeys; verify compatibility at setup rather than hardcoding unverified versions here.

```text
anicup/
├── src/
│   ├── app/                 # pages, route handlers, layouts
│   ├── components/          # accessible field/group/battle/result UI
│   ├── domain/tournament/   # pure rules, shuffle, commands, projections
│   ├── server/
│   │   ├── db/              # schema, transactions, queries
│   │   ├── sessions/        # owner cookies and authorization
│   │   ├── cups/            # application services and lifecycle
│   │   ├── catalog/         # shortlist, provider adapter, pool activation
│   │   ├── sharing/         # safe result projection and image renderer
│   │   ├── analytics/       # minimal events and aggregate queries
│   │   └── operations/      # rate limits, expiry, reports, cleanup
│   └── messages/en.ts
├── drizzle/                 # reviewed SQL migrations
├── scripts/                 # curate/sync pools, cleanup, operational checks
├── tests/                   # original fixtures, integration and browser tests
├── public/                  # original branding; no copied anime artwork dump
├── docs/                    # architecture, rules, data-use, privacy, operations
├── .github/workflows/       # CI and bounded maintenance jobs
├── .env.example             # names and harmless placeholders only
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── README.md
├── AniCup — Business Plan & Product Specification.md
└── implementation plan v1.md
```

The domain module imports neither React nor database/provider code. Its inputs are validated immutable snapshots and commands; outputs are new domain state plus events. Keep one narrow AniList adapter and a fixture adapter. Do not publish packages or create a monorepo until an actual second consumer exists.

Server boundaries: authenticate owner → validate request and expected revision → lock row in a transaction → apply domain command → persist state and idempotency receipt → return canonical state. Public endpoints use a separate minimal projection. All authorization happens server-side even when controls are absent from the UI.

## 3. Authoritative domain rules

### 3.1 Candidate pool and draft generation

Implement the business plan's precise eligibility contract: one reviewed franchise representative, first franchise anime debut in 2020–2029 and not in the future, finished first installment, TV/ONA, no adult/Ecchi/unreviewed entries, no duplicate franchise. A current sequel's release year cannot override an older franchise debut. A curated record contains the provenance for this editorial decision; provider relations alone do not settle ambiguous franchise membership.

Target 64–100 approved franchises. At least 48 currently eligible entries are required to create a draft. Activation must fail with a diagnostic report if the pool is too small, has missing metadata/safety decisions, duplicate franchise keys, or no documented permitted data-use policy. Runtime failure must not silently widen eligibility.

Sort eligible IDs canonically, then use a versioned, seeded Fisher–Yates shuffle with unbiased bounded integer draws. A concrete implementation option is an HMAC-SHA256 counter stream with rejection sampling; fix encoding, counter endianness, and byte consumption in golden fixtures. Use Web Crypto/Node crypto with identical output, never `Math.random()` or `sort(() => random - 0.5)`. Generate seeds with a cryptographic RNG. Tournament seeds are not ownership secrets.

Store the actual draft field (first 32), reserve sequence, consumed/rejected IDs, pool version and shuffle version. A replacement consumes the next eligible unused reserve entry. New denylist entries are skipped in drafts; do not fetch or append new candidates from a newer pool. If no replacement is possible, keep the current entry and return an explicit exhausted response without corrupting state.

Field lock commits exactly 32 entries. Use a separate deterministic stream/domain label for grouping so replacement order cannot accidentally alter unrelated randomness. Shuffle the locked field into groups A–H and display order; persist those assignments. Lock is the `cup_start` event for metrics; opening a draft is not a started tournament.

### 3.2 State machine and invariants

```text
DRAFT --lock--> GROUPS --8 confirmed groups--> KNOCKOUT
                                                  |
                                             15 winners
                                                  v
                                              COMPLETED
                                                  |
                                               publish
                                                  v
                                              PUBLISHED

COMPLETED --undo final--> KNOCKOUT
KNOCKOUT --undo latest knockout vote--> KNOCKOUT
Any retained state --owner deletion / scheduled expiry--> unavailable
```

No group edits after confirmation; no field replacements after lock. Knockout undo removes the most recent vote only and is unavailable after publication. At zero knockout votes there is no earlier knockout action to undo. Returning from completed to knockout clears the derived current result; preserve `first_completed_at` for deduplicated analytics and update the latest completion time when completed again.

Required invariants:

- Exactly 32 unique candidates and 32 unique franchise keys at lock; all belong to the frozen approved pool, subject to the live denylist.
- Eight groups of four; each candidate occurs once. Group progression is A through H.
- Each confirmed group has distinct #1/#2 choices belonging to that group; exactly 16 qualifiers after H.
- Round of 16: A1–B2, C1–D2, E1–F2, G1–H2, B1–A2, D1–C2, F1–E2, H1–G2 in that order.
- Adjacent winners meet in each later round; same-group qualifiers occupy opposite halves and can reunite only in the final.
- Winners must be current match participants. Matches execute in round order, then position order. No future, repeated, or already-eliminated vote.
- Exactly 15 knockout votes yield one champion and one finalist; no third-place match.
- Display buckets are champion (1), runner-up (1), losing semifinalists (2), losing quarterfinalists (4), losing round-of-16 entrants (8), group eliminations (16). Counts sum to 32.
- Published decisions are immutable. Privacy, expiry, and metadata takedowns can revoke/redact display without inventing a new tournament outcome.

Render groups, bracket, winners, and result from one canonical decision log; do not keep independently writable champion, match, and result tables that can disagree. Validate persisted state on read, with explicit schema-version migrations. An unsupported/corrupt version returns a recoverable unavailable state and an operational alert, not a regenerated Cup.

## 4. Persistence model

Use relational ownership/lifecycle fields plus a versioned JSONB domain document for each Cup. Validate JSONB through the same domain schema at every write. Use foreign keys, unique constraints, check constraints, and transactions for the relational fields. Store timestamps in UTC.

| Table | Essential fields and constraints |
| --- | --- |
| `guest_sessions` | `id`, unique `token_hash`, `created_at`, `last_seen_at`, `idle_expires_at`, `absolute_expires_at`; never raw cookie secrets; expired credentials are removed, with an identifier-only owner stub retained until dependent Cups expire/delete |
| `pool_versions` | `id`, category/rules version, `created_at`, `usable_until`, approved field metadata/IDs, content-review and data-policy version; activated explicitly |
| `cups` | `id`, owner session FK, category and pool version, seed, shuffle/rules/state schema versions, `state_json`, `revision`, status, first lock/completion timestamps, latest completion, publication and expiry timestamps; optional unique public ID and deletion-code hash |
| `command_receipts` | owner session, request ID, request-body hash, Cup ID, applied revision; unique `(owner_session_id, request_id)`; used for creation and mutations |
| `analytics_events` | event ID/name, optional separate pseudonymous analytics session, Cup/referral reference where allowed, server timestamp, allowlisted properties; raw retention 30 days |
| `content_reports` | existing Cup/media reference, structured reason, created/resolved timestamps, maintainer disposition; rate-limited, no public text |
| `deletion_tombstones` | minimal identifiers and deletion timestamp, used to suppress restoration; retain for the 30-day backup window |
| `rate_limit_buckets` | short-lived keyed counters and reset time; no raw IP; can initially live in PostgreSQL with atomic increment/expiry |

The Cup document contains the draft/reserve IDs, minimal necessary candidate snapshots, locked group assignments, ordered group choices, ordered knockout votes, and first-party renderer schema version. Derive current match and placements. Do not store arbitrary external URLs submitted by a player.

A `pool_versions` row may retain only its non-content ID/version marker after the approved cache window. No cascading deletion may destroy still-permitted per-Cup records. Reserve entries depend on valid metadata: when a draft's pool becomes unusable, disable replacement/lock and offer a new draft; do not exceed the retention agreement. Already locked Cups use their permitted minimal snapshots until their own expiry.

Maintain a live content denylist outside immutable field snapshots. Art-only removal substitutes a placeholder, not a new contestant. If displaying a contestant's identity is not permissible, pause an in-progress Cup and offer restart; redact or withdraw the published result and purge its images. Treat this as an availability overlay on the state machine, not a way to alter decisions. Document how to apply the overlay to HTML, PNG, OpenGraph, and cached responses.

At this scale, one JSONB state document is preferable to eight interdependent tournament tables. Index owner/expiry, public ID, status/expiry, event time, and receipt lookup. Revisit storage layout only when measured query patterns justify it.

## 5. HTTP and security contract

Illustrative same-origin endpoints; names may change together with tests and documentation, but behavior is mandatory.

| Endpoint | Behavior |
| --- | --- |
| `POST /api/cups` | Create/reuse guest session, rate-limit, create one persisted draft using an idempotency key; accept only known category and optional validated referral ID |
| `GET /api/me/cups` | Owner's retained resume entries, with no cross-owner results |
| `GET /api/cups/:id` | Owner-authorized canonical state; never resolve ownership from a public ID |
| `POST /api/cups/:id/commands` | `replace_candidate`, `lock_field`, `confirm_group`, `vote`, `undo`; require request ID and expected revision |
| `POST /api/cups/:id/publish` | Owner-only completed state; create one unlisted ID and one deletion recovery secret; freeze decisions |
| `DELETE /api/cups/:id` | Owner delete, idempotent; revoke all result/asset projections |
| `POST /api/results/:publicId/delete` | Recovery-secret deletion only; token in body, rate-limited, never grants read/edit/resume access |
| `GET /c/:publicId` | Published, unexpired, permitted public projection, otherwise generic unavailable response |
| `GET /c/:publicId/og.png` | Public 1200×630 card with the same visibility checks |
| `GET /c/:publicId/share.png` | Public download with legible title layout and the same visibility checks |
| `POST /api/reports` | Existing result/media IDs and predefined reason; no user-supplied fetch target |

Requirements:

- Owner token: 256 random bits, hash at rest, HttpOnly/Secure/SameSite=Lax cookie, path `/`. Rotate only with a documented ownership-preserving policy. Local development may relax Secure only on localhost.
- Guest session: 30-day idle expiry, absolute lifetime 180 days. Never accept a user-chosen session identifier. Session expiry does not extend published retention; deletion recovery remains possible by code.
- Public ID: at least 128 random bits, URL-safe, unique constraint, collision retry. Recovery code: 256 random bits, unique per publication, hash at rest, explicit one-time display/download.
- A publication retry must not create multiple results or lose the recovery code. Generate the code deterministically from a dedicated server HMAC key plus publication identifier/version so an authenticated owner can retrieve it again without storing plaintext; retain key versions until affected results expire. Never expose that key in browser bundles, logging, or fixtures. Alternatively replace this mechanism only with a reviewed equivalently recoverable design.
- Validate `Origin` and CSRF protection for all cookie-authenticated mutations, including first session creation; same-site cookies alone are not the full control. No mutating GETs, permissive CORS, or arbitrary redirects.
- Public projections omit owner/session IDs, secrets, recovery data, analytics identifiers, and unpublished fields. Unknown and unauthorized owner IDs have indistinguishable responses. Apply cache isolation to owner routes (`private, no-store`).
- Every command executes atomically with revision comparison. Same request ID and same body returns a successful replay plus current canonical revision; same ID with different body conflicts. A stale revision returns 409 and current authorized state. Do not blindly retry a different command after conflict.
- Authenticate and check deletion/expiry before processing a receipt replay. Retain receipts for the owning Cup's retained lifetime; deletion removes them. Concurrent duplicate create requests must serialize on the session/request key, not create two Cups.
- Restrict SQL access to server-held credentials; if a managed database exposes a Data API, disable access to application tables or explicitly deny anonymous/authenticated public roles. Verify with an unauthenticated request.
- Validate input size and IDs, escape titles in HTML/SVG, and do not allow user HTML, uploaded media, or fetchable URLs. Fetch approved cover assets only from a tested HTTPS host allowlist; validate redirects, MIME type, size, timeout, and private-network destinations to prevent SSRF.
- Use restrictive referrer policy on result/owner pages; redact cookies, authorization, recovery bodies, and query strings from application logs. Configure a practical CSP and avoid exposing source maps containing secrets.

Starting limits, configurable after real traffic: 10 draft creations/session/hour, 30/IP-derived bucket/hour, 120 commands/session/minute, 10 publish attempts/session/hour, and 5 reports or failed recovery attempts/IP-derived bucket/hour. Use a short-lived HMAC of IP for abuse controls, with daily key rotation and at most 24h retention; IP is not a user identity. Account for shared networks, return useful 429 responses, and do not block ordinary bracket reads behind a creation limit.

Cap generated-image dimensions, asset size, and processing time. Cache safe published image content with explicit invalidation. Enforce publication/expiry status before serving any asset; do not expose an origin blob URL that bypasses revocation. Use no-store responses if the selected cache layer cannot reliably implement deletion. Bot previews must not trigger unbounded renders or analytics views.

## 6. UI, persistence, and sharing behavior

Create screens in the order they form a working vertical slice:

1. Landing: plain category definition, “Create field,” same-browser resume entries, and source/privacy links.
2. Field review: 32 readable title cards, replace control per card, replacement exhaustion, an explicit lock action, and safe return to a saved draft. No unrequested modal before each replacement.
3. Group: a compact 2×2 layout when space permits, explicit #1/#2 labels, clear/swap controls, selection count, and confirm. State which confirmed decisions are final.
4. Knockout: two choices, round/match label, saving/error state, last-pick undo, and accessible focus movement after navigation.
5. Owner result: champion, disjoint placements, groups/bracket, publish explanation, expiry information, delete action. Before publish, offer a local result download without a public URL/QR.
6. Published result: public read-only result, source disclosure/attribution as appropriate, copy/download/native share, optional QR, report, expiry, and “Start a new random Cup.” Ownership controls appear only after a separate authorized owner check.

Server acknowledgment is the persisted truth. Disable conflicting actions while a request is outstanding; failed saves retain the current choice and show retry. Do not tell the user progress is saved before acknowledgment. Refresh and multi-tab activity reload canonical server state. V1 is not offline-first; when offline, explain that progress cannot be saved and avoid accepting phantom votes.

Use a shared pure result projection for owner view, public HTML, PNG, and OpenGraph. Prefer Satori plus a supported SVG-to-PNG renderer in Node; confirm deployment/runtime/font compatibility through an early spike. Use licensed bundled fonts, deterministic sizing, long-title wrapping, and original fixture images. Image failure must not prevent completion or link sharing.

Private download uses the owner-authorized result projection with no public URL, QR, or cacheable public endpoint. Public download is a distinct layout from the OG card. Test English/romaji/native-script fallback rendering, absent covers, long titles, and placeholders. QR must decode to the exact unlisted URL with an allowlisted source marker and fit a quiet zone at a readable size; verify on a phone after social-sized image downscaling.

Accessibility acceptance: finish a Cup with keyboard alone and with a screen reader; focus remains predictable after saves/undo; no rank is conveyed by color alone; touch targets are at least 44×44 CSS pixels where practical; standard text contrast at least 4.5:1; no horizontal scrolling required to read decisions at 320px width; reduced-motion disables nonessential transitions. A bracket list supplements any wide diagram.

## 7. Analytics and experiment implementation

Use the business plan's definitions exactly. Keep operational state transitions separate from optional product telemetry. Transactional timestamps support total started/completed/published counts; an optional analytics session identifies measured cohorts only when collection is enabled. Do not repurpose owner secrets as analytics identifiers. Expose analytics opt-out and report its effect on coverage.

Minimal events: `landing_view`, `draft_created`, `candidate_replaced`, `field_locked`, `group_confirmed`, `knockout_started`, `cup_first_completed`, `result_published`, `link_copied`, `image_downloaded`, `native_share_completed`, `result_human_view`, and `referred_cup_locked`. Do not log individual anime preferences or each battle as analytics. Use unique event IDs and transactional deduplication for server events; client events validate against an allowlist and are treated as fallible evidence.

A result human-view event requires browser execution and visible-page engagement, excludes known crawlers and detectable owners, and deduplicates by analytics session/result. It remains an approximation, not proof of a distinct human. Native-share dismissal is not a completion. Download response success does not prove the image was shared elsewhere.

Referral policy: on a measured non-owner result visit, retain the first eligible parent-result attribution for seven days using optional first-party storage. Consume it on the next Cup creation; store the parent and visit timestamp on that Cup even if the field is locked later. A direct CTA can pass a validated parent reference; do not infer an attribution when consent/settings prohibit measurement. Credit completed children only when the visit is within seven days of parent first completion, the child locks within seven days of the visit, and first completes within 24h of lock. A client-supplied parent is untrusted analytics, never authorization or a way to clone the field.

Produce a small SQL/export report for field acceptance, 24h first completion, share intent, non-owner visit conversion, referred completion yield, seven-day repeat, and mutation reliability. It must display numerators, denominators, cohort dates, coverage, exclusions, mature/incomplete windows, and Wilson intervals for session proportions. For referred completion yield, which can exceed 100%, use counts and descriptive rates rather than a binomial interval. Keep raw events 30 days and irreversible daily aggregates afterward; remove identifiers from aggregates.

No full analytics dashboard or external analytics vendor is required. Test cohort SQL with fixtures covering multiple Cups per session, undo/recompletion, owner visits, preview bots, late completion, missing attribution, and opt-out. Formative research records remain private, with minimal consented notes; do not commit participant identities to the public repository.

## 8. Infrastructure, CI/CD, and operations

### Environments and releases

Develop with local PostgreSQL and original fixtures; run CI with an ephemeral database. Preview deployments use isolated fixture data or a non-production database and do not expose production secrets. Fork PR CI is unprivileged; no `pull_request_target` execution of untrusted source with secrets. Untrusted previews must not run credentialed provider sync or production migrations.

Use `main` as the sole production branch. GitHub CI runs frozen install, lint, typecheck, engine/service tests, database integration tests, critical Playwright journeys, and production build. Use uniquely named, always-reporting required checks; do not path-skip a required workflow into a permanent missing state. Pin third-party actions to reviewed commit SHAs.

Keep the draft's preferred Vercel Git integration, but configure required **Deployment Checks** explicitly to hold promotion until checks for the deployed commit pass. Vercel documents this mechanism; do not assume branch protection alone enforces it. [Deployment Checks](https://vercel.com/docs/deployment-checks)

Evidence required: deploy a deliberately failing check on a disposable test branch/project, verify the production alias does not change, and verify pending/missing checks also block. Production promotion must correspond to the tested main commit. Validate a stale build cannot supersede a newer intended release. Document emergency force-promotion separately; it is not part of the normal path.

Apply schema changes through a serialized protected migration job only after CI succeeds. Make its completion a required production promotion check for that commit. Use additive/backward-compatible migrations so the previous application can continue serving while promotion waits or rolls back. No migrations from concurrent app startup or preview builds. Destructive schema changes require a later staged migration plan and a restore rehearsal.

If native deployment checks cannot enforce the tested workflow, use a single Actions-controlled production deployment after successful checks/migrations and disable competing auto-production promotion. Record the change in deployment documentation; never run two release controllers concurrently. [Vercel GitHub Actions guide](https://vercel.com/kb/guide/how-can-i-use-github-actions-with-vercel)

### Configuration and portability

Document configuration names such as `DATABASE_URL`, `APP_ORIGIN`, session/recovery/rate-limit key versions, catalog mode, allowed asset hosts, analytics enabled, retention settings, and limits. Production credentials live in service/GitHub secret stores; `.env.example` contains harmless placeholders. Production origin comes from trusted configuration, not a request's arbitrary Host header.

Provide standard Node build/start scripts, health/readiness endpoints that leak no secrets, a Dockerfile and a local PostgreSQL compose example, and database backup/restore instructions. Vercel-specific rendering or storage must have a documented Node-compatible path. A fresh clone must run in fixture mode without AniList, Vercel, or Supabase credentials.

### Retention and cost controls

Schedule daily idempotent cleanup through one authenticated maintenance mechanism. Implement every retention interval in the business plan, including 30-day inactive draft/progress, 30-day unpublished completion, 180-day publication, 30-day raw analytics/backups, and 24h rate-limit hashes. A daily job does not replace request-time expiry checks. Counts of eligible/expired/deleted rows and cleanup errors are observable without logging secrets.

Limit provider sync to the manually curated ID list. Initial sync uses batches and a conservative 20 requests/minute ceiling, adapts downward to provider headers, handles 429/403/5xx and GraphQL partial errors, and never partially activates a pool. Retry-After and current rate-limit headers take precedence. A failed sync keeps a still-permitted active snapshot or disables creation. [AniList rate limits](https://docs.anilist.co/guide/rate-limiting)

Use daily backups with at most 30-day retention. If the chosen free service does not provide the necessary backups, arrange an affordable encrypted export or defer the public pilot. Restore to a separate database, apply deletion/expiry records before opening traffic, and test a result plus ownership isolation. Record recovery-point target 24h and recovery-time target one business day; these are operational targets, not an uptime guarantee.

Monitor failed saves, provider failures, eligible pool size, image-render failures, cleanup lag, public-route latency, storage/egress, and forecast spend. Alert to the maintainer at US$35/month forecast; apply rate/render restrictions before the US$50 ceiling. Verify service-side budget controls where offered, while recognizing alerts do not guarantee a hard bill cap. No new paid plan is activated as an implicit step of coding.

## 9. Milestones, dependencies, and acceptance

Estimates are **focused engineering days for one experienced maintainer**, not elapsed dates or evidence that an AI can complete them instantly. External provider clarification, account/domain setup, recruitment, and the four-week pilot add calendar time. No extra engineers or volunteers are assumed.

| Milestone | Dependencies | Estimate | Reviewable output |
| --- | --- | --- | --- |
| M0: Validate data and experience | Planning baseline | 2–4 days | Data-use decision record, curated sample, two low-fidelity flows and observed feedback |
| M1: Foundation and delivery path | M0 technical feasibility | 2–3 days | One app, fixture mode, PostgreSQL/migrations, passing CI, protected preview/deployment setup |
| M2: Deterministic engine | M1; final rules from M0 | 3–5 days | Pure domain module, golden seeds, state machine, property tests |
| M3: Persisted guest play | M2 | 4–6 days | Owner sessions, API commands, draft review, group/knockout UI, resume/undo |
| M4: Results and sharing | M3 | 3–5 days | Owner result, publication/recovery/deletion, public result, PNG/OG/QR |
| M5: Live catalog and operations | M0 data clearance; M3–M4 lifecycle | 3–5 days | Reviewed pool, bounded sync, denylist/reports, expiry, cost controls, restore test |
| M6: Measure, harden, and release | M1–M5 | 4–6 days | Metrics report, accessibility/browser verification, release checklist and documentation |

Base estimate: **21–34 focused days**. Allow roughly 20% integration contingency: **26–41 focused days** rounded up. Re-estimate after M0 and M3. Do not quote a launch date until data access, available maintainer time, and pilot recruitment are known. Useful review occurs at each milestone; do not hide all work in one oversized implementation PR.

### M0 — Resolve feasibility before committing to a full build

- Record shortlisted titles, franchise/debut reasoning, safety review status, and whether at least 48 qualifying franchises are feasible. Do not claim the pool exists before the record is produced.
- Document permissible metadata fields, cache/retention limits, artwork display/export basis, and title-only fallback in `docs/data-use.md`. If unclear, obtain provider/rights-holder clarification before real-data launch. A request sent is not permission granted.
- Make a fixture-based group prototype and a plain knockout comparison; observe 8–12 target fans where available. Test unfamiliar-title replacement and rank comprehension. Record observations, not invented survey percentages.
- Spike server image rendering and guest cookie persistence across the target production/preview environment. Estimate actual host/database/domain cost.
- **Exit:** a recorded keep/revise decision for the group format; technically feasible sharing/persistence; lawful real-data path or explicit live-data blocker. Engineering with fixtures may continue through a provider delay; public launch may not.

### M1 — Establish a small, deployable application

- Add license/notices, setup README, environment example, package lock, local database, initial migrations, and original fixtures.
- Separate runtime secrets and fixture mode; include no production data in CI or fork previews.
- Configure checks and deployment gates early, initially using a harmless page.
- **Exit:** fresh clone installs/builds/tests against fixtures; a preview works; a failed check demonstrably cannot promote production. If infrastructure access is unavailable, record that gate as incomplete and continue local work.

### M2 — Make tournament correctness independent of UI

- Implement generation/replacement/lock, group ranking, qualification, fixed seeding, knockout voting, undo, completion, and publication lock.
- Define schema/rules/shuffle versions, deterministic golden examples, and migration rejection behavior.
- **Exit:** meaningful property tests over generated seeds plus boundary cases establish all section 3 invariants, including exactly 32 placement entries and no same-group meeting before the final. No network/database/UI dependency in engine tests.

### M3 — Ship an entire private guest Cup

- Implement transactional commands, owner authentication, idempotency, revision conflicts, rate limits, and cookie lifecycle.
- Build the landing, review, group, knockout, owner result, and resume journey on server persistence.
- Cover double clicks, lost responses, multi-tab commands, offline save errors, exhausted reserve, and browser refresh at every stage.
- **Exit:** a guest finishes a Cup in one browser, closes/reopens it, resumes identical acknowledged state, and cannot read or mutate another guest's Cup. No duplicate state transitions or phantom saves under network retries.

### M4 — Make results safe to share and removable

- Add explicit publication explanation, unique public ID, recovery-code handling, public projections, owner/recovery deletion, and all asset visibility checks.
- Generate independent OG/download layouts from canonical results; copy link/native share/QR use public URLs only.
- Support owner-only local image download before publication.
- **Exit:** anonymous visitors see only published data; forged IDs/body data cannot change winners; retries do not duplicate publication or lose deletion capability; deleting/expiring a result revokes HTML, OG, and PNG within the stated cache bound. QR decodes after downscaling on a phone.

### M5 — Operate without pretending a provider is always available

- Activate the real reviewed pool only after M0's data gate; implement bounded scheduled sync, atomic activation, rate-limit handling, and fail-closed eligibility.
- Implement content reports/denylist, historical redaction/withdrawal, daily cleanup, encrypted backups, deletion replay, alerts, and cost limits.
- **Exit:** simulate upstream outage, partial response, new unsafe cover, depleted pool, cleanup failure, and database restoration. Existing permitted locked Cups do not regenerate; unavailable/expired data is not silently retained or published.

### M6 — Produce release evidence and run the pilot

- Implement cohort queries and verify definitions with sample events; optional analytics being disabled cannot break play.
- Test on iOS Safari, Android Chrome, and desktop keyboard/screen-reader paths, using real devices where available and clearly marking emulated coverage.
- Use a documented mobile test profile and target a usable first screen in three seconds and p95 saved-choice acknowledgment below one second under the expected pilot load. These are initial budgets to measure, not already-achieved promises. Test 20 concurrently active Cups with stubbed upstream access to expose basic contention; do not call this proof of internet-scale capacity.
- Complete deployment, rollback, migration/restore, data-use, privacy, retention, rules, contribution, source-license, and self-host documentation. Verify a fresh clone again against the documented path.
- **Exit:** public-launch checklist signed off with evidence, including domain/services and permitted launch channel. Then run the four-week pilot and apply the business plan's continue/iterate/pause rules. A missed acquisition sample or adverse result stays visible; it is not a completed validation milestone.

## 10. Verification matrix

Prefer tests that protect meaningful invariants and user-visible failure modes. Avoid mirroring implementation line-by-line or adding snapshot churn for cosmetic changes.

| Area | Required proof |
| --- | --- |
| Pool | Under-48 rejection, duplicate franchise, future/older debut, sequel mapping, missing safety, Ecchi, missing art fallback, atomic version activation |
| Randomness | Same versioned inputs produce same persisted result; unbiased bounded draw primitive; replacement never duplicates/reintroduces rejects; reserve exhaustion is safe |
| Tournament | Rank validation, all qualifier paths, fixed bracket mapping, eliminated entrant rejection, undo boundaries, unique champion and 32 disjoint placements |
| Historical behavior | Pool refresh/title change/algorithm update cannot regenerate existing decisions; denylist redacts or withdraws all presentations consistently |
| State integrity | Concurrent votes, duplicate create/publish, retry after lost response, same-key/different-body rejection, stale revision, corrupt/unsupported snapshot |
| Authorization | Another guest cannot list/read/mutate/delete; public token grants no ownership; expired cookie, missing/invalid recovery code, CSRF, database public-role isolation |
| Retention | Every expiry boundary, request-time check before daily cleanup, owner views do not extend Cup life, first-party cache revocation, deleted-data restore suppression |
| Sharing | Owner-only unpublished download, inaccessible unpublished public routes, projection consistency, long/missing titles/art, no secret in PNG/QR/OG/source/logs |
| Accessibility | Keyboard completion, announced rank/error/progress, focus after undo/save, non-color selection, narrow viewport, reduced motion, real mobile pass |
| Provider/network | 429 headers, 403 shutdown, partial GraphQL data, timeout, forbidden image redirects/URLs, offline client, no per-vote provider calls |
| Metrics | First-Cup denominator, delayed windows, repeat/undo dedupe, owner/bot exclusions, opt-out coverage, referral windows, correct interval type |
| Delivery | Failed/missing CI blocks promotion, exact deployed commit, migration serialization, isolated forks/previews, rollback, restore, fresh-clone fixture/self-host path |

Run the relevant checks per change and the complete critical-path suite before public release. External-service live smoke tests are bounded and separate from deterministic CI; ordinary PRs must not depend on AniList availability or real artwork.

## 11. Release checklist and change control

Before calling v1 shipped, attach evidence for M0–M6, an actual service cost estimate within the chosen budget, a content/support contact, and all business-plan public-launch gates. Tag the tested application commit `v0.1.0` if using a pre-1.0 software version; document version 1 does not imply a stable software API or production maturity.

Each implementation PR states the concrete behavior changed, acceptance criteria, evidence, and remaining gate failures. If discoveries require changing a normative product rule, update both plans with a versioned decision before building incompatible behavior. Keep source code, deployment config, and docs in the same repository; GitHub is the source of truth.

Do not add accounts because they are familiar engineering work, do not expand the pool by relaxing safety/identity rules, and do not add categories to compensate for poor completion. The first post-pilot work must address measured friction or a demonstrated user request within an affordable maintenance commitment.
