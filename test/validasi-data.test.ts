import { z } from "zod";

describe("Validation Data Primitif", () => {
  // Validatsi data Primitif
  it("should support validate primitive data type", () => {
    const userNameSchema = z.string().email();
    const isAdminSchema = z.boolean();
    const priceSchema = z.number().min(1000).max(1000000);

    const userName = userNameSchema.parse("gifari@ts.com");
    console.info(userName);

    const isAdmin = isAdminSchema.parse(true);
    console.info(isAdmin);

    const price = priceSchema.parse(10000);
    console.info(price);
  });
});
