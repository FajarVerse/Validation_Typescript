import { z } from "zod";

describe("Validation Transfrom", () => {
  // Validation transform (melakukan transformasi data setelah di parse)
  it("should support transfromation", () => {
    const schema = z.string().transform((data) => {
      return data.toUpperCase();
    });

    const result = schema.parse("nazwa");
    console.info(result);
  });
});
