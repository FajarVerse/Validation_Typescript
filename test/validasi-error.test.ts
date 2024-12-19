import { z, ZodError } from "zod";

describe("Validation Error", () => {
  it("should support validasi error", () => {
    const schema = z.string().min(3).max(100);

    try {
      const result = schema.parse("al");
    } catch (e) {
      if (e instanceof ZodError) {
        console.info(e.errors);
      }
    }
  });
});
