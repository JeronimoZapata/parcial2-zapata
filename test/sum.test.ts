import { describe, it, expect } from "vitest";
import { sum } from "../src/sum";

describe("sum", () => {
  it("suma dos numeros", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
