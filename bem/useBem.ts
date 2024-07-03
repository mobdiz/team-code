import { BEMConfig } from "./types";
import { mergeConfigWithDefault } from "./helpers";

export function useBEM(blockName: string, initConfig: Partial<BEMConfig> = {}) {
  const config = mergeConfigWithDefault(initConfig);

  console.log("Вызывается функция useBEM c параметрами:", {
    blockName,
    config,
  });

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    b(...args: any[]) {
      console.log(
        "Вызывается функция b c параметрами (представлены все в виде массива):",
        args,
      );

      return "block";
    },
  };
}
