import { BEMConfig } from "./types";
import { defaultConfig } from "./consts";

export function mergeConfigWithDefault(
  config: Partial<BEMConfig> = {},
): BEMConfig {
  if (typeof config !== "object" || config === null) {
    throw new Error("Config must be an object");
  }

  const fields = Object.keys(defaultConfig) as Array<keyof BEMConfig>;

  return fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: config?.[field] ?? defaultConfig[field],
    }),
    {} as BEMConfig,
  );
}
