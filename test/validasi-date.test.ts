import { date, z } from "zod";

describe("Validation Date", () => {
  // Validation Date
  it("should support validasi date", () => {
    const birthDateSchema = z.coerce
      .date()
      .min(new Date(1980, 0, 1))
      .max(new Date(2024, 0, 1));

    const birthDate = birthDateSchema.parse("2005-07-27");
    console.info(birthDate);

    const birthDate2 = birthDateSchema.parse(new Date(2005, 10, 10));
    console.info(birthDate2);
  });
});
