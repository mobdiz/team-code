import { describe, expect, it } from "vitest";
import useBEM from "./useBem";

describe("useBEM function with default config", () => {
  it("should return a function", () => {
    const { b } = useBEM("block");

    expect(typeof b).toBe("function");
  });

  it("should return block name when called with no arguments", () => {
    const { b } = useBEM("block");

    expect(b()).toBe("block");
  });

  it("should return block name with modifiers when called with boolean modifiers", () => {
    const { b } = useBEM("block");

    expect(b({ modifier: true })).toBe("block block--modifier");
  });

  it("should return block name with modifiers when called with string modifiers", () => {
    const { b } = useBEM("block");

    expect(b({ modifier: "value" })).toBe("block block--modifier_value");
  });

  it("should return block name with modifiers when called with number modifiers", () => {
    const { b } = useBEM("block");

    expect(b({ modifier: 1 })).toBe("block block--modifier_1");
  });

  it("should return block name with multiple modifiers", () => {
    const { b } = useBEM("block");

    expect(
      b({
        modifier1: true,
        modifier2: "value",
        modifier3: 1,
      }),
    ).toBe("block block--modifier1 block--modifier2_value block--modifier3_1");
  });

  it("should return block name without modifiers when called with null", () => {
    const { b } = useBEM("block");

    expect(b({ modifier: null })).toBe("block");
  });

  it("should return block name without modifiers when called with undefined", () => {
    const { b } = useBEM("block");

    expect(b({ modifier: undefined })).toBe("block");
  });

  it("should return block name with element name", () => {
    const { b } = useBEM("block");

    expect(b("element")).toBe("block__element");
  });

  it("should return block name with element name and modifiers", () => {
    const { b } = useBEM("block");

    expect(b("element", { modifier: true })).toBe(
      "block__element block__element--modifier",
    );
  });

  it("should return block name with element name and modifiers when called with string modifiers", () => {
    const { b } = useBEM("block");

    expect(b("element", { modifier: "value" })).toBe(
      "block__element block__element--modifier_value",
    );
  });

  it("should return block name with element name and modifiers when called with number modifiers", () => {
    const { b } = useBEM("block");

    expect(b("element", { modifier: 1 })).toBe(
      "block__element block__element--modifier_1",
    );
  });

  it("should return block name with element name and multiple modifiers", () => {
    const { b } = useBEM("block");

    expect(
      b("element", {
        modifier1: true,
        modifier2: "value",
        modifier3: 1,
      }),
    ).toBe(
      "block__element block__element--modifier1 block__element--modifier2_value block__element--modifier3_1",
    );
  });

  it("should return block name with element name when called with null", () => {
    const { b } = useBEM("block");

    expect(b("element", null)).toBe("block__element");
  });

  it("should return block name with element name when called with undefined", () => {
    const { b } = useBEM("block");

    expect(b("element", undefined)).toBe("block__element");
  });

  it("should return block name with element name and modifiers when called with null", () => {
    const { b } = useBEM("block");

    expect(b("element", { modifier: null })).toBe("block__element");
  });

  it("should return block name with element name and modifiers when called with undefined", () => {
    const { b } = useBEM("block");

    expect(b("element", { modifier: undefined })).toBe("block__element");
  });

  it("should return block name with element name and modifiers when called with null and undefined", () => {
    const { b } = useBEM("block");

    expect(b("element", { modifier: null, modifier2: undefined })).toBe(
      "block__element",
    );
  });

  it("should return block name with element name and modifiers when called with null and undefined", () => {
    const { b } = useBEM("block");

    expect(b("element", { modifier: null, modifier2: undefined })).toBe(
      "block__element",
    );
  });
});
