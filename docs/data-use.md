# AniCup data-use decision

**Decision date:** 2026-09-10\
**Provider documentation reviewed:** 2026-09-10\
**Provider:** AniList GraphQL API\
**Decision:** **Blocked for live AniList metadata and artwork. Original fixture work may proceed.**

## Decision

AniCup does not yet have a documented basis for the proposed persistent use of AniList metadata. The API terms allow non-commercial use and commercial use below US$150 monthly revenue without express permission, but they also prohibit using the API as a backup or data-storage service and prohibit hoarding or mass collection. The terms do not define an acceptable cache duration, a per-Cup snapshot exception, or rights to display, rehost, transform, or export cover images.

The proposed policy of two cache versions for 14 days and minimal snapshots for a Cup's lifetime is therefore a design constraint, not permission. Title-only presentation removes the artwork question but does not resolve metadata retrieval, storage, and redistribution. Until AniList confirms the intended use or another source with a suitable license is adopted, live-data launch and activation of a provider-derived pool remain blocked. No clarification was sent during C01.

The bounded C01 research query is evidence gathering only. It does not create an active catalog or establish a continuing right to use the returned data.

## Field-by-field policy

| Field or asset | Need | Proposed handling if permission is obtained | C01 status |
| --- | --- | --- | --- |
| `franchise_key` | De-duplicate entrants | Original AniCup editorial identifier; persist in pool and Cup snapshots | Permitted as original editorial data |
| Editorial decision, rationale, reviewer, dates | Prove eligibility | Persist for the catalog lifetime and audit history | Permitted as original editorial data |
| AniList media ID and provider URL | Stable source reference | Store in the reviewed catalog and minimal Cup snapshot | Blocked pending confirmation of storage/use |
| English/romaji title | Display entrant | Store at most two catalog versions; copy into the minimal Cup snapshot | Blocked pending confirmation; title-only is not a metadata license |
| Format, status, country, start/end date | Eligibility | Store at most two catalog versions and the fields needed to explain a locked entrant | Blocked pending confirmation |
| `isAdult`, genres, safety tags | Fail-closed safety review | Keep the reviewed values and decision evidence; refresh before a new pool version | Blocked pending confirmation; provider flags alone are insufficient |
| Popularity | Shortlist ordering only | Use during curation; do not place in Cup snapshots or public output | Blocked pending confirmation; unnecessary after review |
| Provider relation IDs/types | Franchise-debut review | Keep only IDs and the resulting editorial rationale | Blocked pending confirmation |
| Cover URL | Optional display pointer | Do not persist until image terms are clear | Unresolved; disabled |
| Cover bytes or derivative | Cards and generated result images | No download, proxy, cache, crop, rehost, or export without an explicit rights basis | Unresolved; disabled |
| Descriptions, scores, user lists, social content, reviews, characters, staff | Not required | Never request or store | Out of scope |

## Proposed lifecycle, not a grant of permission

If the provider confirms this design, a server-only adapter may fetch only the reviewed shortlist, at most weekly. The catalog cache would retain no more than two active versions and expire each cache version no later than 14 days after its original retrieval (including the current version); refreshing must not reset an older version’s expiry. A draft would pin its pool version; if that version expires before lock, the user must start a fresh draft.

A locked Cup would retain only its provider ID, stable display title, editorial `franchise_key`, and any separately permitted artwork reference until that Cup expires. The existing product limits remain: draft/progress 30 days after owner mutation, unpublished completion 30 days after latest completion, and published results 180 days after publication. The rolling progress rule is not an absolute lifetime cap; clarification must cover potentially longer-lived active Cups or require a compatible absolute cap before launch. Deletion, a safety denylist, or rights withdrawal overrides those limits and must purge affected caches and generated images promptly. No matchup may require a live provider call, and an outage may not extend retention.

Artwork remains off even if metadata use is cleared unless its own display and export basis is documented. The safe fallback is an original title card containing only metadata whose use has been cleared.

## Operational constraints from current documentation

- The published rate-limit page says the API is temporarily degraded to 30 requests per minute, describes a nominal 90-request limit, requires honoring `Retry-After` and `X-RateLimit-Reset`, and documents an additional burst limiter.
- The provider warns that availability is not guaranteed and that severe outages can return HTTP 403.
- The provider says its adult filter may be inaccurate and explicitly says Ecchi is not treated as adult. AniCup therefore requires `isAdult == false`, rejects the Ecchi genre, and keeps a separate human display-safety decision.
- The revenue wording leaves exactly US$150 per month unspecified: it expressly discusses less than and greater than US$150. AniCup must not assume the boundary case is free.

During C01, a plain server request received a provider 403 with the documented temporary-disable message; a later browser-origin request completed. This is an operational observation, not evidence of permission or guaranteed access.

## Unsent clarification draft

> AniCup is a small open-source, guest-only anime tournament site. It would retrieve only a manually reviewed shortlist of 64–100 AniList anime records at most weekly; it is not a tracker, catalog browser, or substitute for AniList. We would show a title and link back to AniList, keep at most two catalog cache versions for 14 days, and copy only provider ID, title, eligibility facts, and editorial franchise key into a locked Cup: in-progress retention is 30 days after the last owner mutation, unpublished completion is 30 days after the latest completion, and publication lasts 180 days after publication. Active progress can therefore retain a snapshot beyond 180 days total. What absolute storage limit do you permit? Is that retrieval, caching, and per-Cup snapshot use acceptable under the API terms, including if the free site later has revenue below US$150/month? Does the answer change at exactly US$150/month? Separately, may we display AniList cover URLs, proxy/cache the image briefly, and include the cover in downloadable or social result images? What attribution, deletion, refresh, or revocation requirements apply?

This draft has not been sent. A request, if later authorized, would not count as permission until a clear response is received and recorded.

## Evidence reviewed

- [AniList API Terms of Use](https://raw.githubusercontent.com/AniList/docs/master/docs/guide/terms-of-use.md), accessed 2026-09-10.
- [AniList API Rate Limiting](https://raw.githubusercontent.com/AniList/docs/master/docs/guide/rate-limiting.md), accessed 2026-09-10.
- [AniList API Considerations](https://raw.githubusercontent.com/AniList/docs/master/docs/guide/considerations.md), accessed 2026-09-10.
- [AniList Media reference](https://docs.anilist.co/reference/object/media), accessed 2026-09-10; the documentation site returned HTTP 403 during this review, so field behavior was also checked against the bounded GraphQL response described in `docs/research/eligibility-audit.md`.

Re-review these sources and the recorded clarification before enabling any live-provider configuration.
