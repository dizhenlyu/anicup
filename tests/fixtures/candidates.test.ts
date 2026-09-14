import { describe, expect, it } from "vitest";
import { fixtureCandidates } from "./candidates";

describe("original fixture pool", () => {
  it("has enough unique franchises for a 32-entry field and replacement reserves", () => {
    expect(fixtureCandidates.length).toBeGreaterThanOrEqual(64);
    expect(new Set(fixtureCandidates.map((entry) => entry.id)).size).toBe(fixtureCandidates.length);
    expect(new Set(fixtureCandidates.map((entry) => entry.franchiseKey)).size).toBe(fixtureCandidates.length);
    expect(new Set(fixtureCandidates.map((entry) => entry.title)).size).toBe(fixtureCandidates.length);
  });

  it("identifies every entry as synthetic without bundling remote artwork", () => {
    expect(fixtureCandidates.length).toBeGreaterThan(0);
    for (const entry of fixtureCandidates) {
      expect(entry.title.trim().length).toBeGreaterThan(0);
      expect(entry.category).toBe("anime-2020s");
      expect(entry.provenance).toEqual({ kind: "original-fixture", source: "AniCup" });
      expect(JSON.stringify(entry)).not.toMatch(/https?:\/\//);
    }
  });
});
