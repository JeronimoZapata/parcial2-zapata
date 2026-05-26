import { describe, it, expect } from "vitest";
import { calculateSum, sum } from "../src/sum";

describe("sum", () => {
  it("suma dos numeros", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("calculateSum", () => {
  it("suma dos entradas validas", () => {
    const result = calculateSum("2", "3");

    expect(result.isValid).toBe(true);
    expect(result.result).toBe(5);
    expect(result.errorMessage).toBeNull();
  });

  it("informa error con entradas invalidas", () => {
    const result = calculateSum("abc", "2");

    expect(result.isValid).toBe(false);
    expect(result.result).toBeNull();
    expect(result.errorMessage).toBeTruthy();
  });
});
