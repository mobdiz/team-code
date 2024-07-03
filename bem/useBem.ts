import { BEMConfig } from "./types";
import mergeConfigWithDefault from "./helpers";

export default function useBEM(
  blockName: string,
  initConfig: Partial<BEMConfig> = {},
) {
  const config = mergeConfigWithDefault(initConfig);

  console.log("useBEM", {
    blockName,
    config,
  });

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    b(...args: any[]) {
      console.log(args);

      return "block";
    },
  };
}
