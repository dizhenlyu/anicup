export type FixtureCandidate = {
  readonly id: string;
  readonly franchiseKey: string;
  readonly title: string;
  readonly category: "anime-2020s";
  readonly provenance: { readonly kind: "original-fixture"; readonly source: "AniCup" };
};

// Original synthetic names, not anime records or an approved live catalog.
const places = ["Amber", "Cloudglass", "Copper", "Ember", "Juniper", "Moonlit", "Paper", "Velvet"] as const;
const stories = ["Observatory", "Courier Club", "Orchard Express", "Tidekeepers", "Lantern Workshop", "Skyward Letters", "Clockwork Garden", "Harbor Orchestra"] as const;

export const fixtureCandidates: readonly FixtureCandidate[] = Object.freeze(
  places.flatMap((place, placeIndex) =>
    stories.map((story, storyIndex) => {
      const key = `fixture-${String(placeIndex * stories.length + storyIndex + 1).padStart(3, "0")}`;
      return Object.freeze({
        id: key,
        franchiseKey: key,
        title: `${place} ${story}`,
        category: "anime-2020s" as const,
        provenance: Object.freeze({ kind: "original-fixture" as const, source: "AniCup" as const }),
      });
    }),
  ),
);
