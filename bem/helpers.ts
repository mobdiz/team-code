import { BEMConfig } from "./types";
import { defaultConfig } from "./consts";

export default function mergeConfigWithDefault(
  config: Partial<BEMConfig>,
): BEMConfig {
  const fields = Object.keys(defaultConfig) as Array<keyof BEMConfig>;

  return fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: config[field] ?? defaultConfig[field],
    }),
    {} as BEMConfig,
  );
}
