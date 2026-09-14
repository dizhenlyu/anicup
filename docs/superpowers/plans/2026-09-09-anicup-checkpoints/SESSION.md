# AniCup session protocol

This protocol implements the user's request to keep **each session below 40% total context**. It governs every checkpoint in this folder. The product and implementation specifications remain authoritative; this folder changes delivery sequencing, not product rules.

## Context budget

The percentage means occupied model context, including initial instructions, messages, source reads and tool output. It is not the account's rolling usage allowance. No model size or token-to-percentage conversion is assumed.

A plan cannot guarantee an exact percentage, and this planning session has no reliable context-percentage reader. Treat the numbers below as a conservative operating policy, not an automatic enforcement feature.

| Observed usage | Action |
| --- | --- |
| At session start | Check the available context indicator. If inherited history already makes the budget tight, start a fresh task with the checkpoint prompt and repository state. |
| Below 25% | Work only on the selected checkpoint. Keep source reads and outputs bounded. |
| 25–30% | Finish the current small unit and verify it; do not expand scope. |
| At 30% | Stop new implementation; write the handoff and run only bounded outstanding checks that fit the remaining budget. |
| By 35% | End the session, even if the checkpoint is incomplete. Reserve the remaining margin for final reporting/tool output. |
| 40% | User ceiling, not a target. A late pause cannot retroactively meet it. |

If the meter is unavailable to the agent, state that exact compliance cannot be measured. The user can monitor the UI and steer a pause; the agent still uses the narrow scope, short outputs and early handoff. Do not invent a measurement or substitute account limits. A hard ceiling requires observable usage and sufficiently small operations; no fixed checkpoint size guarantees it.

Use a **new task with a short prompt and shared repository files** for each session. Avoid carrying a long conversation into the next checkpoint. Do not rely on compaction as evidence that the entire session stayed below the ceiling.

## Minimal reading packet

Read SESSION.md, the selected checkpoint, its STATUS.md row, and direct prerequisite handoffs. Read only cited sections of the original specs, then actual touched files and nearest callers/tests. Search headings with rg and read bounded sections; do not load every checkpoint, every handoff, the entire repository, or long command logs.

Keep a handoff to about 300–500 words. A typical startup packet should be a few thousand tokens plus the necessary code, but that is an estimate, not a percentage promise. Use focused test output and save lengthy evidence to files with a concise result. Re-open only relevant failure lines.

[Official prompting guidance](https://learn.chatgpt.com/docs/prompting) recommends supplying relevant sources, focused files/reproductions and explicit verification. The 25/30/35% operating thresholds here are this plan's recommendation, not a documented Codex feature.

## Execution and delivery

1. Read repository instructions and inspect git status. Preserve unrelated changes. Confirm that prerequisite code is present in the current checkout, not just described in another task.
2. Select exactly one checkpoint. Inspect its interfaces; write only the small code-level plan needed for that scope. Use Superpowers executing-plans and relevant implementation/verification skills. Do not re-plan the entire application.
3. For new behavior, add meaningful tests for the specified invariants and failure modes, then implement and verify. For documents/configuration, use the real build, inspection or operational rehearsal instead of tests that merely mirror text.
4. Prefer 3–6 substantive implementation files per unit, excluding tests, route wiring and unavoidable scaffold configuration. This is a split heuristic, not permission to compress unrelated concerns into large files.
5. If scope grows, use the card's continuation boundary. Save a partial handoff before the context stop point. Keep the checkpoint in-progress; do not label a partially tested feature delivered.
6. Finish with the diff, exact successful/failed checks, outstanding evidence, and a concise handoff. Record the commit SHA, or base SHA plus exact uncommitted files. A later session on another checkout must first receive those changes.
7. Update STATUS.md and stop. A passed checkpoint authorizes no automatic second checkpoint in the same session.

A deliverable is a running user journey, an independently verified library/service, or an auditable decision/rehearsal. It need not be independently deployable or publicly launchable. Keep incomplete public features inaccessible until their lifecycle protections pass.

Use one writer per shared checkout. If sessions run concurrently, use isolated branches/worktrees and integrate prerequisite commits explicitly; schema/migration changes and shared contract files require coordination. Parallel eligibility in the roadmap does not itself authorize spawning agents.

## Shared product constraints

- Guest-only English mobile-first app; one category `anime-2020s`. No OAuth, profiles, public discovery, custom fields, imports, same-field challenges, payments or translations.
- One Next.js/TypeScript/Tailwind app; pure TypeScript domain; server-only Node/PostgreSQL/Drizzle; pnpm/one lockfile; original fixtures without service credentials.
- Category requires reviewed Japanese TV/ONA first installments, finished airing, franchise debut in 2020–2029 and not future, no duplicate franchise, adult/Ecchi/ambiguous/unreviewed exclusions. Target 64–100 approved; at least 48 eligible to enable creation.
- Exactly 32 locked entries, eight groups, 16 qualifiers and 15 knockout wins. Canonical persisted decisions determine results. Latest-only knockout undo before publication; publication freezes decisions.
- Owner secrets are separate from public IDs and analytics IDs. Server authorization, CSRF/origin, revisions, receipts, request-time expiry and rate controls precede exposure.
- Guest session: 30 days idle/180 days absolute. Draft/progress: 30 days since owner mutation. Unpublished completion: 30 days after latest completion. Publication: 180 days. Raw analytics/backups/tombstones: at most 30 days. Rate hashes: at most 24h. Owner views do not extend Cup life.
- Immediate live deletion/revocation; first-party cache target five minutes. Use no-store where revocation cannot be enforced. Reapply deletions before restored data serves traffic.
- Live provider/artwork use requires recorded permission basis. The proposed two cache versions/14 days and per-Cup snapshots are not permission. Fixture implementation may proceed with a live-data blocker.
- AGPL-3.0-only for original code; retain separate third-party notices and a deployed-version source link.
- Main is the only production branch; same-commit checks and serialized migrations gate promotion. CI/fork previews contain no production credentials.
- US$50/month total recurring ceiling including domain; US$35 forecast alert; US$150 three-month pilot envelope. These are planning budgets, not purchase authorization.

## Handoff contract

Write `handoffs/Cnn.md` in this folder; use HANDOFF-TEMPLATE.md. Record status, base/result commit, changed files, implemented interfaces, checks and exact results, known blockers, and next single action. Never store secrets, participant identities or raw sensitive production logs.

Only mark done when the card's acceptance proof is complete. Use awaiting-evidence for missing provider/device/deployment/research evidence; local scaffolding or a fixture test does not satisfy a live gate. A checkpoint may deliver a decision that live-data work is blocked, but the separate live-launch gate remains open.
