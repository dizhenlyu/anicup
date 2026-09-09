# AniCup — Business Plan & Product Specification v1

**Version:** 1.0

**Date:** September 8, 2026

**Status:** Version 1 planning baseline; implementation and public-launch gates remain outstanding.

**Owner:** Repository maintainer, dizhenlyu

**Repository:** [dizhenlyu/anicup](https://github.com/dizhenlyu/anicup)

**Proposed domain:** anicup.app; ownership and production configuration are not verified.

**Delivery plan:** [implementation plan v1.md](implementation%20plan%20v1.md)

## 1. Executive decision

AniCup is an open-source, mobile-first anime preference game: **32 anime. Eight groups. One champion.** Players review a random field, rank two favorites in each group of four, then make 15 head-to-head knockout choices. They can publish an unlisted result and invite someone else to play.

The result is **your champion of this Cup**, not your true favorite across all anime, an objective quality judgment, or a complete ranking. The candidate field, grouping, and choices affect the outcome. Even the runner-up need not be the player's second-favorite anime overall.

V1 is a self-funded product experiment. Its purpose is to establish whether fans enjoy completing and sharing this particular game enough to justify continued maintenance. There is no validated revenue model, market-size estimate, acquisition advantage, or growth forecast. Open source is a distribution and trust choice, not evidence of demand.

Planning defaults adopted for this baseline are guest-only play, optional replacement of unfamiliar titles before starting, and a US$50/month operating ceiling. These are planning assumptions rather than a spending authorization or a representation of confirmed founder preferences. Accounts, revenue, and expansion require a later scope decision.

## 2. User need, alternatives, and differentiation

The initial audience is English-speaking anime fans who recognize enough series that debuted in the 2020s to make a 32-entry Cup enjoyable. This is narrower than all Reddit anime users. A casual viewer who knows only ten titles is not well served by this format; the pilot must measure how often that happens.

The proposed job is: “Give me an entertaining way to choose a champion and show friends how I got there, without building a template or creating an account.” Entertainment and conversation are the benefits. AniCup does not promise improved taste, personalized recommendations, or scientifically accurate preference discovery.

| Alternative | Evidence and implication for AniCup |
| --- | --- |
| [TierMaker](https://tiermaker.com/) | Already offers anime templates and tier-list creation. AniCup must demonstrate that guided choices are preferable for some users to manually arranging a list. |
| [BracketFights](https://bracketfights.com/) | Already offers custom tournaments and anime brackets. “Anime in a knockout bracket” is not a novel product or defensible advantage. |
| [UwUFUFU](https://www.uwufufu.com/) | An adjacent game platform with creation and category discovery; exact play-flow comparisons still require hands-on evaluation. No usage or superiority claims are assumed. |
| A message, poll, or hand-made image | Often sufficient for sharing a favorite. AniCup must earn the extra time needed to complete a Cup. |

The proposed distinction is the combination of a curated field with one entry per franchise, eight ranked group selections, reliable guest resume, and a readable result. All are hypotheses to test. Community trust, good curation, and a pleasant experience might sustain a small project; none currently constitutes a moat.

## 3. Critical review of the original draft

This ledger records the substantive challenges and their v1 resolutions. Repeated UI descriptions and duplicated requirements from the original have been consolidated.

| Draft assumption or conflict | Why it fails scrutiny | V1 resolution |
| --- | --- | --- |
| “Find your true/real favorite” | A random sample excludes possible favorites; elimination is path-dependent and cannot establish a full order. | Promise a champion of the displayed field. |
| 23 “interactions”; shortened format implies higher completion | Eight groups require 16 ranked picks and eight confirmations, plus 15 knockout picks: at least 39 actions, excluding setup. A straight 32-entry knockout needs 31 picks. | Describe 23 decision screens; measure elapsed time and completion against a simple knockout prototype. |
| Random popular titles will be recognizable | Popularity does not imply a player has watched a title. Forced unfamiliar choices weaken the payoff. | Add optional pre-Cup replacement and measure field-review abandonment. |
| Multiple seasons can enter independently | A franchise with many entries can dominate the field; users may not know whether they are judging a season or a series. | One curated franchise representative; series-level judgment. |
| Five launch categories, later “2020s only” | Contradictory scope; every category adds curation and testing. | One 2020s-debut category. |
| 2020s example includes Steins;Gate/AoT | Familiar examples do not establish eligibility, and a later season is not a franchise debut. | Apply the explicit debut rule to every real example and candidate. |
| Unordered top two, meaningful #1/#2 seeds, and random bracket placement | These are incompatible rule definitions. | Explicit ranked pair and one fixed bracket mapping. |
| Group stage creates accurate finalists | Three strong favorites can share a group; two contenders can meet before the final. | Explain tournament placement; do not infer global ranks or taste-match percentages. |
| Three OAuth providers plus guest claims and history | Adds authentication, recovery, privacy, and support work before the core hypothesis is tested. | Guest-only v1; publish and delete without an account. |
| Every result automatically gets a public URL, with three visibility modes | Unlisted is publicly accessible to link holders. Automatic publication is unnecessary disclosure. | Owner-only until explicit publish; then unlisted. No public discovery mode. |
| QR is a primary growth mechanism | Scanning an image viewed on the same phone adds friction; screenshots can lose attribution. | Copy link/download first; QR is an optional secondary control. |
| Repeated result posts on r/anime drive growth | Community rules restrict images and simple polls; permission to announce a tool does not authorize a recurring promotion channel. | One appropriate release announcement and permission-based community tests. |
| Viral rate and arbitrary percentage targets prove success | Starts are not completions, share clicks are not shares, and small samples are noisy. | Define cohorts, denominators, attribution limits, and continue/iterate/stop rules. |
| “100K visitors / 25K accounts” in year one | No acquisition model, retention evidence, staffing, or budget supports it. | Remove forecasts; use staged evidence gates. |
| AniList caching and permanent snapshots are unrestricted | API terms restrict mass collection; data access does not establish artwork redistribution rights. | Bounded curated data, documented retention/use basis, and title-first fallback. |
| `isAdult = false` means general/safe | AniList specifically warns that Ecchi is not considered adult. | Additional exclusions, manual cover review, and a removal procedure. |
| Open source means costs and contributors take care of themselves | Hosting, moderation, curation, and support still require an owner. | Named maintainer role, cost ceiling, maintenance budget, and shutdown/export plan. |
| Nine packages and a provider framework are needed initially | No existing code or multiple consumers justify a monorepo. | One app with internal domain modules and one provider adapter. |
| Git integration plus CI automatically gates production | Successful deployment builds can promote by default unless checks are configured. | Explicit deployment checks and a demonstrated failed-check release test. |
| Both main and master deploy to production | Two production sources invite races and ambiguity; the repository already uses main. | Main is the only production branch. |
| IDs and a seed guarantee unchanged historical results | Provider records, algorithms, and eligibility can change; deletion also conflicts with eternal immutability. | Persist a versioned field and decisions; preserve game outcomes while allowing metadata/art removal and expiry. |
| Strong SEO needs many near-identical pages | No evidence that thin keyword pages acquire qualified users. | One useful landing page; unlisted results stay outside indexing and sitemaps. |

External constraints referenced in this review are supported in sections 6, 9, 11, and 12. Changes to scope are product judgments, not claims that users have already validated them.

## 4. V1 scope and user flow

| Ship in v1 | Defer |
| --- | --- |
| English, mobile-first web app; one category | More decades, movies-only, genres, manga, characters, Chinese localization |
| Random 32-title review with optional replacements | Watchlist import, manual custom-field builder, personal recommendations |
| Eight ranked groups, fixed 16-entry knockout | Alternative public tournament modes, Elo, full ordering |
| Same-browser guest resume and owner deletion | OAuth, profiles, cross-device sync, account history |
| Champion, runner-up, stage placements, full field/groups/bracket | Aggregate popularity leaderboards and “taste match” scores |
| Explicit unlisted publishing, copy link, PNG, OpenGraph, optional QR | Public feed, comments, uploads, user-written titles, social features |
| New random Cup from a result with referral attribution | Same-field friend challenge and side-by-side comparison |
| Accessible controls, analytics, limits, documentation, CI/CD | Payments, ads, affiliate links, sponsorship, native apps |

Flow: **Open → Review random field → Lock field → Rank eight groups → Play knockout → See result → Optionally publish/share → Visitor starts a new random Cup.**

The landing page states the category, field size, lack of login requirement, and the limits of the result. It does not promise a completion time until measured. Starting from another person's result labels the action “Start a new random Cup”; it must not imply an identical challenge.

### Field review and unfamiliar titles

Create a persisted draft field of 32 distinct eligible franchises. A player may accept it immediately or replace an unfamiliar entry. Replacement draws from a pre-shuffled reserve in the same pool version, excluding all current and previously rejected entries. The rejected entry stays in place if the reserve is exhausted; show that no replacements remain and allow the player to retain it or leave. Never insert duplicates, silently broaden the category, or force the Cup to start.

Field review does not require a claim that every title has been watched. It lets players play on familiarity or curiosity; copy says to choose based on their own preference. No replacement is available once the player locks the field. A mistaken field can be abandoned and restarted as a new Cup. V1's minimum remains 32; if many people cannot assemble a comfortable field, consider a smaller Cup in the next specification instead of hiding the problem.

### Group and knockout rules

A locked Cup has eight groups A–H of four distinct entries. Select a first favorite (#1) and a different second favorite (#2), then confirm. Selected entries have explicit rank labels. The player can clear a selection or swap ranks before confirmation. Confirmed groups are final in v1; avoid the complexity of changing an upstream decision after later outcomes depend on it.

Round-of-16 matches are fixed in this order:

| Match | Entrants |
| --- | --- |
| 1 | A1 vs B2 |
| 2 | C1 vs D2 |
| 3 | E1 vs F2 |
| 4 | G1 vs H2 |
| 5 | B1 vs A2 |
| 6 | D1 vs C2 |
| 7 | F1 vs E2 |
| 8 | H1 vs G2 |

Adjacent match winners meet in the next round: 1/2, 3/4, 5/6, 7/8; then adjacent quarterfinal winners; then the final. This separates each group's two qualifiers into opposite halves, so they can meet again only in the final. Do not randomize bracket positions after qualification or imply football points, draws, or matches in the group stage.

Each knockout click records one winner and advances. Provide “Undo last knockout pick” while the result is unpublished, including after the final; it removes the latest pick only. The player can repeat this action to return farther. Publication freezes decisions. Editing a published result requires a new Cup, not mutating what others saw.

There are eight group decision screens plus 15 knockout screens, with **at least 39 selection/confirmation actions**, plus field review and navigation. The group format is retained for its proposed experience, not for a proven speed advantage.

### Result and presentation

Show champion, runner-up, two losing semifinalists, losing quarterfinalists, losing round-of-16 entries, group eliminations, the original locked field, and full decisions. These are disjoint placement buckets; do not label them a strict 1–32 ranking. The full bracket has a readable list alternative on narrow screens. No third-place playoff.

Use dark-first styling, readable title text, visible ranks, large touch targets, keyboard operation, screen-reader announcements, clear focus, adequate contrast, and reduced motion. Art is an enhancement; all flows must work with title cards and broken-image placeholders. Use title text as the accessible name and avoid reading decorative covers twice. External links reveal no plot summaries or spoilers by default.

## 5. Category and candidate contract

The single category is **Anime series that debuted in the 2020s**, with slug `anime-2020s`. It is not “all anime with any season airing in the 2020s.”

An eligible entrant must satisfy every rule:

1. A manually mapped franchise with one representative AniList record and an editorially checked franchise debut date from January 1, 2020 through the earlier of today or December 31, 2029.
2. A Japanese anime series with representative format TV or ONA, whose representative first installment has finished airing. Movies, shorts, music videos, recaps, sequel-only entries, and unreviewed spin-offs are excluded initially.
3. No other entrant has the same curated `franchise_key`. Relaunches/sequels of older franchises do not become 2020s debuts merely because the provider year is recent. Ambiguous cases are excluded until reviewed.
4. `isAdult` is explicitly false, Ecchi is excluded, and a maintainer has approved the displayed metadata and any art for non-explicit presentation. Missing or disputed safety information fails closed.
5. A stable title and provider ID exist. Missing art uses a title card and does not invalidate a tournament.

Build a shortlist of **64–100 reviewed franchises**, with at least **48 currently eligible entries** required to enable new draft creation. That threshold gives a 32-entry field at least 16 potential replacements; it does not guarantee any particular person's familiarity. If the shortlist cannot meet the rules, pause new Cups and revisit the category rather than relaxing rules invisibly.

Popularity helps the maintainer choose recognizable entries; it is not a claim of representativeness, quality, or a ranking threshold proven to work. Sample uniformly without replacement from the approved pool. Do not popularity-weight the draw as well, which would further concentrate exposure.

Version each published pool. Persist the draft's pool version, reserve order, accepted/rejected entries, locked candidate snapshot, group order, algorithm/rules version, and seed. The snapshot and recorded decisions are authoritative. Refreshes of popularity or editorial rules affect new drafts only, except safety removals described below. If a draft's pool reaches its permitted cache lifetime before field lock, explain that it needs a fresh draft; do not silently regenerate it. Already locked Cups use their permitted minimal snapshots until their own expiry.

## 6. Data dependency, artwork, and content operations

AniList is the initial metadata provider; v1 needs only selected IDs, titles, format/status, debut-related information for review, popularity, safety fields, provider links, and optional cover URLs. Do not ingest descriptions, user lists, social content, scores, or the full catalog. Keep one internal adapter so engine tests and self-hosted demos can use original fixtures.

AniList's published terms prohibit hoarding/mass collection and competing services, and distinguish free use from commercial licensing above a stated revenue threshold. Those terms do not specify a blanket permission for this plan's snapshots or artwork exports. The maintainer must document an acceptable basis for the actual retrieval, retention, and image use before real-data launch; seek clarification where needed. Open-source licensing does not resolve third-party rights. [AniList API terms](https://docs.anilist.co/guide/terms-of-use)

Proposed operating policy: fetch only the curated shortlist, refresh its metadata at most weekly, retain at most two active cache versions for 14 days, and retain minimal per-Cup snapshots only for the result lifetime. This is a design proposal to validate against provider terms, not a claim of permission. Use title-first cards if cover display/export rights are unresolved. If metadata use cannot be established, real-data launch is blocked; fixture-based implementation can continue.

No matchup requires an AniList call. A previously approved, still-permitted snapshot supports play during outages; do not extend its retention simply because the provider is unavailable. Honor retry headers, apply backoff, and stop creation if a usable pool is unavailable. Current documentation warns of a temporary 30 requests/minute limit; do not assume the nominal 90 always applies. [Rate-limiting guidance](https://docs.anilist.co/guide/rate-limiting)

AniList warns that its adult classification excludes Ecchi and may not meet other services' standards. Manual review supplements provider flags; AniCup does not advertise itself as suitable for children or claim that non-explicit covers mean the underlying show is family-friendly. [Content considerations](https://docs.anilist.co/guide/considerations)

The maintainer owns the allowlist, denylist, weekly review, and report handling. A report control references an existing result or media ID; no public comments or uploads. Target first review within two business days, with prompt removal of credible explicit-content or rights issues. A global denylist can hide art/title metadata or withdraw a result while preserving internal tournament IDs where permissible. Record why a historical display changed; never silently substitute another contestant. Purge affected generated images and caches. Metadata removal and expiry take precedence over a promise of perpetual results.

## 7. Guest ownership, privacy, and retention

V1 does not have accounts. A server-generated, high-entropy secret in an HttpOnly, Secure, SameSite cookie authenticates the owner; a hash is stored server-side. Public result IDs are separate and confer no edit or delete rights. A browser can resume its retained Cups through a simple resume list, without a profile or account history product.

Before publishing, only the owner can see the result. “Publish result” explains that anyone with the link can view it. Publication creates an unlisted URL, excluded from search indexing and sitemaps. Unlisted is not private: recipients can forward it, platforms can fetch previews, and noindex is not access control. There is no public results directory.

The owner may delete a Cup, including a published result. Offer a downloadable recovery code for each published result, usable only to delete that result if the cookie is lost. Store only its hash; never put it in a share URL, QR, analytics, or logs. Lost cookie plus lost code means no automatic ownership recovery; a reporting route remains available for abuse/removal. No cross-device resume promise.

Retention defaults:

| Data | Retention |
| --- | --- |
| Guest session | 30 days idle, renewed by owner activity; at most 180 days from creation |
| Draft/in-progress Cup | 30 days since last owner mutation; owner views alone do not renew it |
| Completed unpublished Cup | 30 days after latest completion |
| Published Cup | 180 days after publication; expiry shown before publishing and on the result |
| Raw product analytics | 30 days, then aggregate counts without visitor/Cup identifiers |
| Security/rate-limit identifiers | Short-lived; rate-limit hashes expire within 24 hours |
| Backups | At most 30 days; restored data must reapply deletion records before serving traffic |

Deletion removes live private data and revokes public page, PNG, and OpenGraph routes immediately; first-party caches are invalidated with a target of five minutes. Deleted data ages out of backups within 30 days. Screenshots and third-party preview copies cannot be recalled. Expired/deleted routes show a generic unavailable page without the result. Retain only minimal deletion tombstones needed to prevent restored data from resurfacing, for the backup window.

Collect no email, real name, watchlist, uploaded image, or public free text. Never include raw IPs, owner/recovery secrets, full query strings, or preference-by-title events in product analytics. Infrastructure logging and third-party image requests must be disclosed in the privacy notice. Essential session storage is required for resume; optional analytics must respect the selected launch-region consent requirements and a disable setting. Completion remains functional when analytics are disabled.

## 8. Sharing and acquisition loop

Publishing enables a result URL, copy-link control, downloadable PNG, and a platform-native share action when supported. Use a cryptographically random public identifier with at least 128 bits of entropy; a five-character example is too short to serve as a privacy boundary.

The PNG contains the category, champion, final opponent, losing semifinalists, readable AniCup URL, and optional QR. The complete 32-entry bracket belongs on the result page; cramming it into a small social card is unreadable. Provide a 1200×630 OpenGraph image and a separate legible download layout. The image must match the stored result and remain usable without cover art.

QR links directly to the result, with a fixed source marker such as `src=qr`; its destination contains no ownership token. QR is secondary to links on mobile. All share routes work without viewer login. Report link copies, downloads, and native-share completions as **share intent**, not proof of an external post or a human recipient.

A visitor sees the original result and can start a fresh random field. Referral attribution records the source result on the visitor's next Cup creation; it does not imply a same-field challenge. Never auto-post to a social account.

## 9. Launch experiment and decision rules

Start with 8–12 recruited anime fans outside the maintainer's immediate feedback circle where feasible. Observe field recognition, replacement use, rank mistakes, mobile readability, time to complete, and whether people voluntarily want to share. Compare the group prototype with a plain 32-entry knockout in counterbalanced sessions using comparable familiar fields. This is formative research, not a statistically powered A/B test. If the group format consistently adds effort without enjoyment, revise the rule specification before building more features.

For the public pilot, seek **200 distinct measured guest sessions with a first locked Cup**, within four weeks of permitted launch activity. This is a recruitment target, not a traffic forecast. If the sample is not reached, report acquisition as unproven; do not silently treat a handful of enthusiastic users as validation.

Channel plan: an appropriate open-source launch announcement, a small number of moderator-approved community invitations, and links that players voluntarily share. Keep channel tags and compare completion quality. No paid acquisition, unsolicited DMs, repeated promotional posts, or spending based on imagined virality.

r/anime currently allows announcements of released anime tools, requires community participation to post, restricts image posts, and prohibits simple polls. Read the rules again at launch and obtain moderator guidance for uncertain formats. A result screenshot is not automatically an allowed post. Do not treat community membership as an addressable audience or permission to promote. [r/anime rules](https://www.reddit.com/r/anime/wiki/rules/)

### Measurement contract

The primary metric is **first-Cup completion within 24 hours of field lock**, measured once per eligible guest session. Cookie loss, analytics opt-out, shared devices, and bots limit person-level claims. Report measured coverage and server totals separately. Exclude maintainer/test sessions and recognized bots consistently.

| Metric | Definition | Initial decision threshold; hypothesis, not benchmark |
| --- | --- | --- |
| Field acceptance | Sessions locking their first draft within 24h / sessions creating a first draft | At least 70%; investigate unfamiliarity and replacements below this |
| First-Cup completion | Sessions completing their first locked Cup within 24h / sessions locking a first Cup | At least 55% |
| Share intent | First completed Cups with a successful link copy, image download, or native share within 24h / first completed Cups | At least 15%; not “actual share rate” |
| Visitor-to-lock conversion | Measured non-owner result visitors who lock a Cup within seven days / measured non-owner result visitors | Directional 10%; wait for at least 100 visitors before interpreting |
| Referred completion yield | Distinct referred visitor sessions that complete a Cup / all completed parent Cups in a weekly cohort | Report as a diagnostic; no claim of self-sustaining virality |
| Seven-day repeat | Sessions locking another Cup within seven days after first completion / first completers with seven days of observation | Directional 10%; secondary for an occasional-use game |
| Technical completion reliability | Mutation requests failing for server reasons / valid mutation requests | Below 1%; report conflicts, invalid input, and rate limits separately |

For referred yield, count visits within seven days of the parent's first completion, child field locks within seven days of that visit, and child first completions within 24h of child lock; allow up to 15 days before closing the parent cohort. Count each parent once even after undo/recompletion, and report publication delays as a limitation of this window. Deduplicate visitor sessions per parent, exclude detectable owner visits, and separately show referred starts. Bot previews do not count as human views. If a privacy setting prevents attribution, classify it as unknown rather than guessing.

Share rate and visitor conversion alone cannot determine a viral coefficient; the number of recipients reached per share and their completion are also needed. Do not optimize a starts/completed ratio that can rise through abandoned or repeated starts.

Decision after the pilot: continue modestly if field acceptance, completion, and share-intent thresholds pass with no safety, reliability, or budget breach. Report counts and 95% Wilson intervals for session proportions rather than calling narrow misses statistically meaningful; referred yield can exceed 100% and needs descriptive counts/rates instead. If completion is below 35% or field acceptance below 50%, pause distribution and investigate recognition/effort before adding anything. For intermediate results or weak sharing, make one focused revision and repeat a bounded pilot. Two unsuccessful pilots, unmanageable operations, or no affordable lawful data path justify pausing the hosted service while keeping source available.

## 10. Sustainability and operating model

The maintainer is the initial product owner, developer, curator, operator, and support contact. No volunteer engineering capacity is assumed. Plan for 2–4 hours/week of post-launch curation/support; measure it. Sustained work beyond that budget is a reason to reduce scope or seek a named co-maintainer, not assume the community will help.

V1 has no monetization. The planning ceiling is **US$50/month total recurring service spend including a domain allowance**, with a maximum three-month pilot envelope of US$150. This excludes founder time and is not purchase authorization. Check provider usage and pending charges weekly; alert at US$35 forecast spend and restrict expensive creation/rendering before the ceiling. Traffic limits can protect costs but are not a contractual billing cap.

As checked on September 8, 2026, Vercel advertises Hobby at $0 and Pro at $20/month; Hobby is restricted to personal, non-commercial use. Supabase advertises Free at $0 and Pro from $25/month, with free projects subject to inactivity pausing. These are starting prices, not all-in guarantees. [Vercel pricing](https://vercel.com/pricing) · [Hobby restrictions](https://vercel.com/docs/plans/hobby) · [Supabase pricing](https://supabase.com/pricing)

| Pilot scenario | Planning allocation | Consequence |
| --- | --- | --- |
| Eligible non-commercial pilot | $0 web + $0 database + $5/month domain/contingency allowance | Accept free-tier limits; verify backups and availability before inviting users. Domain figure is an allowance, not a quote. |
| Paid production baseline | $20 web + $25 database + $5 domain/contingency = $50/month before extra usage/tax | Consumes the entire cap; additional seats, staging, tax, storage, or traffic require a cheaper configuration or a revised budget before activation. |
| Traffic spike | No assumed unlimited free scaling | Rate-limit new Cups, cache bounded assets, and keep existing results readable where feasible. |

Track costs per 1,000 completed Cups using actual monthly service cost and actual completions, alongside API calls, stored bytes, image generation, bandwidth, and maintainer hours. At $50 and 1,000 completions, service cost would be $0.05/completion; that is scenario arithmetic, not a forecast. There is no expected revenue to offset it.

After demonstrated demand, consider optional community support or one paid feature through a separate plan that rechecks API, host, and artwork terms. Ads and sponsorship are not effortless additions: they alter operations, trust, and service eligibility. Do not build premium features without evidence of willingness to pay.

If funding or maintenance ends, stop new Cups, provide notice and result download while feasible, follow retention/deletion policy, and document self-hosting. Do not promise permanent public links or uptime beyond what the maintainer can support.

## 11. Open-source and technical direction

Use **AGPL-3.0-only** for original application code, retaining the original draft's network-copyleft intent while making the identifier explicit. Include the license and a source link for the deployed version. The AGPL addresses access to corresponding source for modified network software; it is not a ban on commercial reuse. Its adoption may limit reuse by organizations that prefer permissive licenses. [GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0.html)

Third-party metadata, artwork, fonts, trademarks, and dependencies keep their own rights and notices. Do not bundle AniList's catalog or anime covers under AniCup's code license. Document what contributors can submit, use compatible dependencies, and provide original test fixtures. The plan does not itself add a LICENSE file or claim the current repository is already fully licensed.

Start with one Next.js/TypeScript application, Tailwind, an independent TypeScript tournament module, server-side PostgreSQL access through Drizzle, and one AniList adapter. Supabase is the initial managed PostgreSQL option; it is not a second database or an auth requirement. Use a server-rendered share-card module and a QR library. Pin supported versions during setup rather than inventing version numbers in this document.

No monorepo, standalone auth package, public writable database API, generic media framework, or microservices are required. Keep provider and deployment interfaces small enough for a standard Node/PostgreSQL self-hosting path. Local development and tests must run on synthetic fixtures without external credentials.

The repository currently contains a README and this planning material, not an implemented application. The implementation plan defines the state schema, APIs, test cases, milestones, and operational checks. Documentation approval does not imply any feature or deployment exists.

## 12. Delivery and public-launch gates

`main` is the only production branch. Use GitHub CI and Vercel Git integration with explicit required Deployment Checks for the same commit. A passing Vercel build alone is insufficient. Test that failing and missing checks prevent production promotion; validate rollback and migration compatibility. [Vercel Deployment Checks](https://vercel.com/docs/deployment-checks)

Public launch requires all of the following, with evidence recorded by the maintainer:

- The formative pilot supports continuing the group format and the field-recognition rules.
- At least 48 eligible reviewed franchises and a documented acceptable basis for metadata use/retention. Artwork use also has a documented basis, or title-first fallback is enabled; that fallback does not resolve metadata restrictions.
- Guest start, lock, groups, knockout, undo, resume, expiry, owner isolation, publishing, and deletion pass acceptance checks.
- Result pages and both image forms match persisted decisions; QR works on actual phones; unauthenticated viewers cannot change or delete a Cup.
- Mobile/keyboard/screen-reader checks pass, with usable title-only and provider-outage flows.
- Analytics definitions are implemented, privacy/retention notices match behavior, and operational logs exclude secrets.
- Rate limits, spend controls, report handling, backups, restoration, deletion replay, and rollback are exercised.
- CI gates production; fork PRs have no production secrets or production database access.
- License, source link, contribution guidance, local setup, fixture mode, and self-host/deployment documentation exist.
- Domain ownership, service configuration, launch channel suitability, and an actual cost estimate are verified.

The next expansion is selected from evidence: smaller fields if recognition fails; simpler rules if completion fails; improved results if sharing fails; accounts only if people need recovery/history; same-field challenges if meaningful comparison drives repeat play. None is automatically part of v1.
