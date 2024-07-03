import { describe, expect, it } from "vitest";
import { mergeConfigWithDefault } from "./helpers";
import { BEMConfig } from "./types";
import { defaultConfig } from "./consts";

describe("mergeConfigWithDefault", () => {
  it("should return default config when called with no arguments", () => {
    expect(mergeConfigWithDefault()).toEqual(defaultConfig);
  });

  it("should return default config when called with empty object", () => {
    expect(mergeConfigWithDefault({})).toEqual(defaultConfig);
  });

  it("should return default config when called with partial config", () => {
    expect(mergeConfigWithDefault({ elementDivider: "--" })).toEqual({
      ...defaultConfig,
      elementDivider: "--",
    });
  });

  const invalidConfigs = [null, 42, "string", true, false];

  invalidConfigs.forEach((config) => {
    it(`should throw an error when called with invalid config: ${config}`, () => {
      expect(() =>
        mergeConfigWithDefault(config as Partial<BEMConfig>),
      ).toThrow();
    });
  });
});
