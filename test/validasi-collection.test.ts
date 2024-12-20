import { z } from "zod";

describe("Validasi Collection", () => {
  // Validasi Array
  it("should support validasi array", () => {
    const schema = z.array(z.string()).min(1).max(5);

    const request: Array<string> = ["a", "b", "c"];
    const result = schema.parse(request);

    console.info(result);
  });

  // Validasi Set
  it("should support validasi set", () => {
    const schema = z.set(z.string()).min(1).max(10);

    const request: Set<string> = new Set(["a", "b", "c", "d", "e"]);
    const result: Set<string> = schema.parse(request);
    console.info(result);
  });

  // Validasi Map
  it("should support validasi map", () => {
    const schema = z.map(z.string(), z.string());

    const request: Map<string, string> = new Map([
      ["name", "nazwa"],
      ["age", "25"],
    ]);

    const result: Map<string, string> = schema.parse(request);
    console.info(result);
  });
});
