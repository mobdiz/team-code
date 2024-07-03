import type { BEMConfig } from "./types";

export const Case = {
  Camel: "CamelCase",
  Kebab: "kebab-case",
  Snake: "snake_case",
};

export type Case = (typeof Case)[keyof typeof Case];

export const defaultConfig: BEMConfig = {
  elementDivider: "__",
  modifierDivider: "--",
  modifierValueDivider: "_",
  caseType: Case.Kebab,
};
