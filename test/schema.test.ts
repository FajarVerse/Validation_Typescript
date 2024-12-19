import { z } from "zod";

describe("zod", () => {
  // Schema (aturan)
  it("should support Validation", () => {
    const schema = z.string().min(3).max(100);

    const request = "gifari";

    const result = schema.parse(request);
    expect(result).toBe(request);
  });
});
