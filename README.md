# AniCup

A guest-only anime tournament project. C02 provides an English, dark-first landing page and 64 original title-only fixtures. Cup creation, persistence, live catalogs, sharing and deployment are later checkpoints.

## Run locally

Install Node **24.21.0** (see `.nvmrc` / `.node-version`) and pnpm **11.19.0**. With nvm installed:

```sh
nvm install
nvm use
npm install --global pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3000](http://localhost:3000). No `.env` file, database, provider account or hosted-service credentials are needed. No remote fonts or anime artwork are loaded. “Browse fixture field” jumps to all 64 synthetic entries; the illustrated Cup flow describes future play.

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

The dev/start scripts bind to loopback by default. Production builds use Next's supported webpack builder; Turbopack's CSS worker requires a local port unavailable in some sandboxes. These are standard Node/Next.js scripts; hosting and health/readiness routes arrive with later infrastructure checkpoints.

## Configuration and boundaries

`.env.example` documents harmless future configuration names; C02 does not read them and always serves fixtures. Do not add credentials to `NEXT_PUBLIC_*`, client imports, fixtures, or source control. Database/provider configuration and validation will live under `src/server/` when introduced. `src/messages/en.ts` owns English copy. `tests/fixtures/candidates.ts` exports immutable synthetic entries; it is also the temporary page's fixture source. Do not treat it as an approved live catalog or final tournament schema.

Original code is **AGPL-3.0-only**; see [LICENSE](LICENSE). [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) defines the separate third-party rights boundary. The landing page links to the [source repository](https://github.com/dizhenlyu/anicup); this scaffold has no deployed version yet. C06 must pin that link to the deployed commit and make its corresponding source available before publication.

## Dependency selection

Versions were checked against npm package metadata on 2026-09-09: Next.js 16.3.4, React 19.3.0, Tailwind 4.3.3, TypeScript 5.9.3, Vitest 5.0.0 and ESLint 10.10.0. Node 24 is an LTS line ([Node releases](https://github.com/nodejs/node/releases)); it satisfies [Next's Node minimum](https://nextjs.org/docs/app/getting-started/installation) and the installed Vitest/pnpm engines. TypeScript 5.9.3 satisfies typescript-eslint's supported `<6.1` range. ESLint uses supported `typescript-eslint` and the Next plugin directly because `eslint-config-next` still brings plugins whose peer ranges exclude ESLint 10. One `pnpm-lock.yaml` pins the resolved tree.

`pnpm-workspace.yaml` explicitly allows the native dependency build scripts and the six selected React/type package versions published within pnpm's release-age window. Global virtual-store linking is disabled so local and CI installs use the same self-contained layout.

## Checkpoints

Requirements and evidence are tracked in [checkpoint status](docs/superpowers/plans/2026-09-09-anicup-checkpoints/STATUS.md). See [data-use policy](docs/data-use.md) before any real metadata or artwork use. Completing the fixture app does not clear the live-data or public-launch gates.
