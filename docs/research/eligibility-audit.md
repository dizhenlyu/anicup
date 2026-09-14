# Eligibility feasibility audit

**Audit date:** 2026-09-10. **Category:** `anime-2020s`. **Reviewer:** Codex (agent feasibility screen, not maintainer approval). Provider response retrieved 2026-09-09 Pacific; reviewed here on 2026-09-10.

## Decision and counts

A 64-record bounded sample contains **52 provisional candidates**, **5 Ecchi exclusions**, and **7 older-franchise exclusions**. **Approved entries: 0**. Forty-eight eligible franchises look plausible but are **not yet established**: even if every provisional candidate passes the remaining checks, this sample has only four entries of margin. Five additional rejections would leave 47. At least 48 final approvals and the permitted-use decision are required; no runtime eligibility rule may be relaxed to reach the threshold.

The preliminary worker report called 52 rows passing. This audit deliberately narrows that claim to provisional candidates: provider relation graphs alone cannot settle franchise identity and no human display-safety approval was obtained. Titles involving violence or sexual themes may still fail later review even when the provider adult/Ecchi flags pass. AniCup is not making a child-suitability claim.

## Method and evidence boundary

The worker retained one bounded AniList GraphQL response with three page aliases (`p1`, `p2`, `p3`), 150 total media records and direct relation edges, in a temporary research file. No covers, descriptions, users or social data are included in the audit. The exact original query text was not retained, so an identical query replay is not claimed. The response fields examined were `id`, `title`, `format`, `status`, `startDate`, `endDate`, `countryOfOrigin`, `isAdult`, `genres`, `siteUrl` and direct `relations.edges` (type, ID, format, date). Popularity ordered the research shortlist, not tournament sampling.

For the provisional list, the screen requires a complete 2020–2029 date through the audit date, completed Japanese TV/ONA, explicit `isAdult=false`, and no Ecchi genre. Records with an earlier or undated direct anime relation were held out. Manga/novel publication dates do not constitute anime debut. An explicit editorial override excludes Slime Season 2 (108511): its provider relation date is not sufficient to make it a first installment. The first 52 remaining records in response order form the provisional list; the 12 named negative controls below document exclusions. This is a purposive feasibility sample, not an unbiased estimate of all anime.

A missing direct prequel does not prove there was no prior anime, adaptation, short, relaunch or spin-off. Every provisional row therefore needs independent franchise-history review, representative confirmation and human review of the exact displayed metadata. Its listed date is a **provisional debut hypothesis from the selected record**, not a confirmed franchise debut. All provisional keys below are proposed editorial identifiers; C21 must validate their uniqueness and mapping. All rows have a provider source link. No artwork was downloaded or approved; use is blocked by [data-use policy](../data-use.md).

Temporary response SHA-256: `746e62c18bff00050e421e152b7edacad963f5a157f24c70121e248022f95b20`. The bulk response is not committed and is not an application cache. The row-level evidence below is the durable research record; source fields may change after this dated observation.

## Provisional candidates (52)

Common observed provider facts for every row: `JP`, `FINISHED`, `isAdult=false`, genres contain no Ecchi. Common decision: **candidate / unavailable to drafts**; title is a research identifier only. `display_safety_review=unclear`, `reviewed_by` human maintainer unset, artwork `none`, permitted metadata policy absent. Relation column lists the direct anime relation IDs examined, or “none returned”; no recursive/full-history review is claimed.

| Source / representative title | Proposed franchise key | Format | Provisional debut → first installment end | Direct anime relation IDs | Decision |
| --- | --- | --- | --- | --- | --- |
| [Chainsaw Man · 127230](https://anilist.co/anime/127230) | `chainsaw-man` | TV | 2022-10-12 → 2022-12-28 | 155884, 156809, 157173, 157349, 159110, 171627, 198726 | candidate; history and human safety pending |
| [SPY x FAMILY · 140960](https://anilist.co/anime/140960) | `spy-x-family` | TV | 2022-04-09 → 2022-06-25 | 142838 | candidate; history and human safety pending |
| [Frieren: Beyond Journey’s End · 154587](https://anilist.co/anime/154587) | `frieren-beyond-journey-s-end` | TV | 2023-09-29 → 2024-03-22 | 169811, 170068, 175691, 182255, 189513 | candidate; history and human safety pending |
| [Tokyo Revengers · 120120](https://anilist.co/anime/120120) | `tokyo-revengers` | TV | 2021-04-11 → 2021-09-19 | 132467, 142853, 214263 | candidate; history and human safety pending |
| [Solo Leveling · 151807](https://anilist.co/anime/151807) | `solo-leveling` | TV | 2024-01-07 → 2024-03-31 | 176496, 184694 | candidate; history and human safety pending |
| [DAN DA DAN · 171018](https://anilist.co/anime/171018) | `dan-da-dan` | TV | 2024-10-04 → 2024-12-20 | 185586, 185660 | candidate; history and human safety pending |
| [Hell’s Paradise · 128893](https://anilist.co/anime/128893) | `hell-s-paradise` | TV | 2023-04-01 → 2023-07-01 | 166613 | candidate; history and human safety pending |
| [Tower of God · 115230](https://anilist.co/anime/115230) | `tower-of-god` | TV | 2020-04-02 → 2020-06-25 | 153406 | candidate; history and human safety pending |
| [OSHI NO KO · 150672](https://anilist.co/anime/150672) | `oshi-no-ko` | TV | 2023-04-12 → 2023-06-28 | 164117, 166531 | candidate; history and human safety pending |
| [BLUE LOCK · 137822](https://anilist.co/anime/137822) | `blue-lock` | TV | 2022-10-09 → 2023-03-26 | 163146, 163147 | candidate; history and human safety pending |
| [The Apothecary Diaries · 161645](https://anilist.co/anime/161645) | `the-apothecary-diaries` | TV | 2023-10-22 → 2024-03-24 | 170508, 176301 | candidate; history and human safety pending |
| [86 EIGHTY-SIX · 116589](https://anilist.co/anime/116589) | `86-eighty-six` | TV | 2021-04-11 → 2021-06-20 | 131586 | candidate; history and human safety pending |
| [Komi Can’t Communicate · 133965](https://anilist.co/anime/133965) | `komi-can-t-communicate` | TV | 2021-10-07 → 2021-12-23 | 141055, 142984 | candidate; history and human safety pending |
| [To Your Eternity · 114535](https://anilist.co/anime/114535) | `to-your-eternity` | TV | 2021-04-12 → 2021-08-30 | 138565 | candidate; history and human safety pending |
| [The Eminence in Shadow · 130298](https://anilist.co/anime/130298) | `the-eminence-in-shadow` | TV | 2022-10-05 → 2023-02-15 | 156001, 161964, 194447 | candidate; history and human safety pending |
| [The God of High School · 116006](https://anilist.co/anime/116006) | `the-god-of-high-school` | TV | 2020-07-06 → 2020-09-28 | none returned | candidate; history and human safety pending |
| [MASHLE: MAGIC AND MUSCLES · 151801](https://anilist.co/anime/151801) | `mashle-magic-and-muscles` | TV | 2023-04-08 → 2023-06-30 | 166610 | candidate; history and human safety pending |
| [WONDER EGG PRIORITY · 124845](https://anilist.co/anime/124845) | `wonder-egg-priority` | TV | 2021-01-13 → 2021-03-31 | 131773 | candidate; history and human safety pending |
| [Kaiju No. 8 · 153288](https://anilist.co/anime/153288) | `kaiju-no-8` | TV | 2024-04-13 → 2024-06-29 | 178754, 179998, 179999, 186300 | candidate; history and human safety pending |
| [DON'T TOY WITH ME, MISS NAGATORO · 120697](https://anilist.co/anime/120697) | `don-t-toy-with-me-miss-nagatoro` | TV | 2021-04-11 → 2021-06-27 | 140596 | candidate; history and human safety pending |
| [The Misfit of Demon King Academy: History’s Strongest Demon King Reincarnates and Goes to School with His Descendants · 112301](https://anilist.co/anime/112301) | `the-misfit-of-demon-king-academy-history-s-strongest-demon-king-reincarnates-and-goes-to-school-with-his-descendants` | TV | 2020-07-04 → 2020-09-26 | 130588 | candidate; history and human safety pending |
| [Zom 100: Bucket List of the Dead · 159831](https://anilist.co/anime/159831) | `zom-100-bucket-list-of-the-dead` | TV | 2023-07-09 → 2023-12-26 | none returned | candidate; history and human safety pending |
| [Toilet-bound Hanako-kun · 108463](https://anilist.co/anime/108463) | `toilet-bound-hanako-kun` | TV | 2020-01-10 → 2020-03-27 | 159074, 170892 | candidate; history and human safety pending |
| [Great Pretender · 110349](https://anilist.co/anime/110349) | `great-pretender` | ONA | 2020-06-02 → 2020-09-21 | 170935 | candidate; history and human safety pending |
| [Summer Time Rendering · 129201](https://anilist.co/anime/129201) | `summer-time-rendering` | TV | 2022-04-15 → 2022-09-30 | none returned | candidate; history and human safety pending |
| [SAKAMOTO DAYS · 177709](https://anilist.co/anime/177709) | `sakamoto-days` | ONA | 2025-01-11 → 2025-03-15 | 184237 | candidate; history and human safety pending |
| [Shikimori's Not Just a Cutie · 127911](https://anilist.co/anime/127911) | `shikimori-s-not-just-a-cutie` | TV | 2022-04-10 → 2022-07-10 | none returned | candidate; history and human safety pending |
| [The Case Study of Vanitas · 131646](https://anilist.co/anime/131646) | `the-case-study-of-vanitas` | TV | 2021-07-03 → 2021-09-18 | 135136 | candidate; history and human safety pending |
| [The Fragrant Flower Blooms With Dignity · 181444](https://anilist.co/anime/181444) | `the-fragrant-flower-blooms-with-dignity` | TV | 2025-07-06 → 2025-09-28 | none returned | candidate; history and human safety pending |
| [My Love Story with Yamada-kun at Lv999 · 154965](https://anilist.co/anime/154965) | `my-love-story-with-yamada-kun-at-lv999` | TV | 2023-04-02 → 2023-06-25 | none returned | candidate; history and human safety pending |
| [WIND BREAKER · 163270](https://anilist.co/anime/163270) | `wind-breaker` | TV | 2024-04-05 → 2024-06-28 | 177048, 178680 | candidate; history and human safety pending |
| [Dorohedoro · 105228](https://anilist.co/anime/105228) | `dorohedoro` | TV | 2020-01-13 → 2020-03-30 | 114622, 173172 | candidate; history and human safety pending |
| [Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway · 114232](https://anilist.co/anime/114232) | `higehiro-after-being-rejected-i-shaved-and-took-in-a-high-school-runaway` | TV | 2021-04-05 → 2021-06-28 | none returned | candidate; history and human safety pending |
| [BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense. · 106479](https://anilist.co/anime/106479) | `bofuri-i-don-t-want-to-get-hurt-so-i-ll-max-out-my-defense` | TV | 2020-01-08 → 2020-03-25 | 116867 | candidate; history and human safety pending |
| [Vivy -Fluorite Eye's Song- · 128546](https://anilist.co/anime/128546) | `vivy-fluorite-eye-s-song` | TV | 2021-04-03 → 2021-06-19 | 138345 | candidate; history and human safety pending |
| [Tomo-chan Is a Girl! · 151806](https://anilist.co/anime/151806) | `tomo-chan-is-a-girl` | TV | 2023-01-05 → 2023-03-30 | 163339 | candidate; history and human safety pending |
| [Wistoria: Wand and Sword · 174576](https://anilist.co/anime/174576) | `wistoria-wand-and-sword` | TV | 2024-07-07 → 2024-09-29 | 182300 | candidate; history and human safety pending |
| [Darwin's Game · 105190](https://anilist.co/anime/105190) | `darwin-s-game` | TV | 2020-01-04 → 2020-03-21 | none returned | candidate; history and human safety pending |
| [TSUKIMICHI -Moonlit Fantasy- · 125206](https://anilist.co/anime/125206) | `tsukimichi-moonlit-fantasy` | TV | 2021-07-07 → 2021-09-22 | 139518 | candidate; history and human safety pending |
| [The Angel Next Door Spoils Me Rotten · 143338](https://anilist.co/anime/143338) | `the-angel-next-door-spoils-me-rotten` | TV | 2023-01-07 → 2023-03-25 | 170019 | candidate; history and human safety pending |
| [takt op.Destiny · 131565](https://anilist.co/anime/131565) | `takt-op-destiny` | TV | 2021-10-06 → 2021-12-22 | none returned | candidate; history and human safety pending |
| [Tomodachi Game · 141014](https://anilist.co/anime/141014) | `tomodachi-game` | ONA | 2022-04-06 → 2022-06-22 | none returned | candidate; history and human safety pending |
| [Akudama Drive · 116566](https://anilist.co/anime/116566) | `akudama-drive` | TV | 2020-10-08 → 2020-12-24 | none returned | candidate; history and human safety pending |
| [The Millionaire Detective - Balance: UNLIMITED · 114888](https://anilist.co/anime/114888) | `the-millionaire-detective-balance-unlimited` | TV | 2020-04-10 → 2020-09-25 | none returned | candidate; history and human safety pending |
| [Mieruko-chan · 131083](https://anilist.co/anime/131083) | `mieruko-chan` | TV | 2021-10-03 → 2021-12-19 | none returned | candidate; history and human safety pending |
| [The Dangers in My Heart · 153152](https://anilist.co/anime/153152) | `the-dangers-in-my-heart` | TV | 2023-04-02 → 2023-06-18 | 165066, 166216, 170221, 182317 | candidate; history and human safety pending |
| [The Way of the Househusband · 125426](https://anilist.co/anime/125426) | `the-way-of-the-househusband` | ONA | 2021-04-08 → 2021-04-08 | 132193 | candidate; history and human safety pending |
| [Moriarty the Patriot · 114124](https://anilist.co/anime/114124) | `moriarty-the-patriot` | TV | 2020-10-11 → 2020-12-20 | 124858 | candidate; history and human safety pending |
| [Blue Period · 128705](https://anilist.co/anime/128705) | `blue-period` | ONA | 2021-09-25 → 2021-12-11 | none returned | candidate; history and human safety pending |
| [So I'm a Spider, So What? · 103632](https://anilist.co/anime/103632) | `so-i-m-a-spider-so-what` | TV | 2021-01-08 → 2021-07-03 | none returned | candidate; history and human safety pending |
| [ODDTAXI · 128547](https://anilist.co/anime/128547) | `oddtaxi` | TV | 2021-04-06 → 2021-06-29 | 143080, 158676 | candidate; history and human safety pending |
| [I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too · 153845](https://anilist.co/anime/153845) | `i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too` | TV | 2023-04-04 → 2023-06-29 | 170110 | candidate; history and human safety pending |

## Reviewed exclusions (12)

These cannot enter an approved pool. Earlier-release evidence is sufficient to reject the category even where this bounded sample does not establish the franchise's exact first-ever date. The displayed-title safety review remains unapproved for excluded entries too; no art was reviewed.

| Source / record | Proposed franchise key | Record dates | Provider safety | Exclusion and debut evidence |
| --- | --- | --- | --- | --- |
| [Mushoku Tensei: Jobless Reincarnation · 108465](https://anilist.co/anime/108465) | `mushoku-tensei-jobless-reincarnation` (research-only) | 2021-01-11 → 2021-03-22 | adult=false; Ecchi=yes | Excluded: Ecchi genre; franchise debut not resolved because safety already fails. |
| [My Dress-Up Darling · 132405](https://anilist.co/anime/132405) | `my-dress-up-darling` (research-only) | 2022-01-09 → 2022-03-27 | adult=false; Ecchi=yes | Excluded: Ecchi genre; franchise debut not resolved because safety already fails. |
| [More than a Married Couple, but Not Lovers. · 141949](https://anilist.co/anime/141949) | `more-than-a-married-couple-but-not-lovers` (research-only) | 2022-10-09 → 2022-12-25 | adult=false; Ecchi=yes | Excluded: Ecchi genre; franchise debut not resolved because safety already fails. |
| [Gleipnir · 108241](https://anilist.co/anime/108241) | `gleipnir` (research-only) | 2020-04-05 → 2020-06-28 | adult=false; Ecchi=yes | Excluded: Ecchi genre; franchise debut not resolved because safety already fails. |
| [Uzaki-chan Wants to Hang Out! · 115113](https://anilist.co/anime/115113) | `uzaki-chan-wants-to-hang-out` (research-only) | 2020-07-10 → 2020-09-25 | adult=false; Ecchi=yes | Excluded: Ecchi genre; franchise debut not resolved because safety already fails. |
| [Attack on Titan Final Season · 110277](https://anilist.co/anime/110277) | `attack-on-titan-final-season` (research-only) | 2020-12-07 → 2021-03-29 | adult=false; Ecchi=no | Excluded: older franchise / sequel or relaunch. [104578](https://anilist.co/anime/104578) PREQUEL, released 2019-04-29 |
| [Horimiya · 124080](https://anilist.co/anime/124080) | `horimiya` (research-only) | 2021-01-10 → 2021-04-04 | adult=false; Ecchi=no | Excluded: older franchise / sequel or relaunch. [14753](https://anilist.co/anime/14753) ALTERNATIVE, released 2012-09-26 |
| [Kaguya-sama: Love is War? · 112641](https://anilist.co/anime/112641) | `kaguya-sama-love-is-war` (research-only) | 2020-04-11 → 2020-06-27 | adult=false; Ecchi=no | Excluded: older franchise / sequel or relaunch. [101921](https://anilist.co/anime/101921) PREQUEL, released 2019-01-12 |
| [My Hero Academia Season 5 · 117193](https://anilist.co/anime/117193) | `my-hero-academia-season-5` (research-only) | 2021-03-27 → 2021-09-25 | adult=false; Ecchi=no | Excluded: older franchise / sequel or relaunch. [104276](https://anilist.co/anime/104276) PREQUEL, released 2019-10-12 |
| [Re:ZERO -Starting Life in Another World- Season 2 · 108632](https://anilist.co/anime/108632) | `re-zero-starting-life-in-another-world-season-2` (research-only) | 2020-07-08 → 2020-09-30 | adult=false; Ecchi=no | Excluded: older franchise / sequel or relaunch. [21355](https://anilist.co/anime/21355) PREQUEL, released 2016-04-04 |
| [Dr. STONE: STONE WARS · 113936](https://anilist.co/anime/113936) | `dr-stone-stone-wars` (research-only) | 2021-01-14 → 2021-03-25 | adult=false; Ecchi=no | Excluded: older franchise / sequel or relaunch. [105333](https://anilist.co/anime/105333) PREQUEL, released 2019-07-05 |
| [Fire Force Season 2 · 114236](https://anilist.co/anime/114236) | `fire-force-season-2` (research-only) | 2020-07-04 → 2020-12-12 | adult=false; Ecchi=no | Excluded: older franchise / sequel or relaunch. [105310](https://anilist.co/anime/105310) PREQUEL, released 2019-07-06 |

## Remaining workload and activation gate

1. Resolve [metadata retention and artwork questions](../data-use.md); do not send the prepared clarification without authorization.
2. For each of 52 provisional candidates, independently confirm franchise history and the first finished representative, and record a human title/metadata safety decision. Recheck current provider safety/status fields before activation. Keep ambiguous cases unavailable.
3. Obtain at least 48 approvals, then grow to the target 64–100 reviewed franchises. The current sample needs at least 12 additional final approvals even if all 52 candidates pass to meet the lower target of 64; rejected/ambiguous rows increase the workload. Do not count the 64 synthetic C02 fixtures as real franchises.
4. C21 implements pool validation using [curation format](curation-format.md). C01 produces evidence and a blocked decision, not a provider adapter, active pool, legal permission or public launch.
