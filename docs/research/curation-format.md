# Curated candidate record format

**Schema:** `anicup-curation/v1`\
**Category:** `anime-2020s`

This format separates research candidates, editorially approved entries, and entries excluded by a specific rule. An AniList record is never approved merely because a query returned it.

## Required record

| Field | Type / allowed values | Requirement |
| --- | --- | --- |
| `schema_version` | `anicup-curation/v1` | Required |
| `category_slug` | `anime-2020s` | Required |
| `record_state` | `candidate`, `approved`, `excluded` | Required |
| `provider` | `anilist` | Required for provider-derived records |
| `provider_id` | positive integer | Required and unique within a pool |
| `provider_url` | HTTPS URL | Required |
| `display_title` | non-empty string | Required; English preferred, romaji fallback |
| `format` | `TV` or `ONA` | Required |
| `status` | `FINISHED` | Required for approval |
| `country_of_origin` | `JP` | Required for approval |
| `start_date`, `end_date` | ISO `YYYY-MM-DD` | Required and not future for approval |
| `franchise_key` | stable AniCup slug | Required; unique among approved entries |
| `franchise_debut_date` | ISO date | Must be 2020-01-01 through the earlier of the review date and 2029-12-31 |
| `franchise_debut_basis` | concise editorial rationale | Name relation IDs checked and any ambiguity |
| `representative_basis` | concise editorial rationale | Explain why this is the first TV/ONA installment used to represent the franchise |
| `is_adult` | boolean | Must be explicitly `false` |
| `ecchi_review` | `pass`, `fail`, `unclear` | Provider genre plus human review; only `pass` can be approved |
| `display_safety_review` | `pass`, `fail`, `unclear` | Human review of displayed title/metadata; only `pass` can be approved |
| `artwork_state` | `none`, `approved`, `unresolved`, `rejected` | `none` is valid for title-only display |
| `decision_reasons` | non-empty string array | Required for `excluded`; optional explanatory notes otherwise |
| `reviewed_by` | maintainer identifier | Required before approval |
| `reviewed_at` | timestamp | Required before approval |
| `sources` | non-empty array | Each item has `url`, `accessed_at`, `supports`, and optional `provider_fields` |
| `data_use_policy_version` | date or policy identifier | Required for approval; must resolve to a permitted live-data decision |

Dates must preserve provider precision. A missing month/day fails closed rather than being silently converted to January 1. `franchise_key` is editorial data and must not be inferred at runtime from a title string.

## State transitions

- `candidate` means the record is under review or passed a bounded feasibility screen. It is unavailable to draft creation.
- `approved` means every eligibility field passed human review, sources are recorded, the data-use policy permits the actual stored/displayed fields, and artwork is either separately approved or `none`.
- `excluded` means at least one rule failed or remained ambiguous. The reason and sources stay recorded so a later sync cannot silently re-add it.

The C01 audit contains candidates and exclusions only. Its 52 provisional candidate rows provide bounded feasibility evidence, not confirmed franchise or safety approval; they do not constitute an approved pool. C01 records zero approved entries because `docs/data-use.md` blocks live provider data.

## Example

```yaml
schema_version: anicup-curation/v1
category_slug: anime-2020s
record_state: candidate
provider: anilist
provider_id: 130003
provider_url: https://anilist.co/anime/130003
display_title: BOCCHI THE ROCK!
format: TV
status: FINISHED
country_of_origin: JP
start_date: 2022-10-09
end_date: 2022-12-25
franchise_key: bocchi-the-rock
franchise_debut_date: 2022-10-09
franchise_debut_basis: Illustrative rationale only; independent franchise-history review remains required.
representative_basis: First finished TV installment; record 130003 is the representative.
is_adult: false
ecchi_review: unclear
display_safety_review: unclear
artwork_state: none
decision_reasons: []
reviewed_by: null # No human approval; example only
reviewed_at: null # Populate only on an actual review
sources:
  - url: https://anilist.co/anime/130003
    accessed_at: 2026-09-10
    supports: provider identity, title, format, status, origin, dates, genres, relations
    provider_fields: [id, title, format, status, countryOfOrigin, startDate, endDate, isAdult, genres, relations]
data_use_policy_version: blocked-2026-09-10
```

The example remains a `candidate`: `blocked-2026-09-10` cannot satisfy approval.

## Pool activation validation

Before a pool version can activate, validation must report and reject:

- fewer than 48 `approved` records;
- a missing required field or provenance item;
- a start/debut date outside the category window or in the future;
- a format, status, origin, adult, Ecchi, or display-safety failure;
- duplicate provider IDs or `franchise_key` values;
- unresolved franchise membership;
- provider data without a permitted `data_use_policy_version`; or
- artwork other than `none` without a recorded rights basis.

Pool versions should use an immutable identifier such as `anime-2020s-YYYY-MM-DD.N`. Activation changes only new drafts; locked Cups retain their permitted minimal snapshot and rules version.
