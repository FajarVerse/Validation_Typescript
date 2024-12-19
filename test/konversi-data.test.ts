import { z } from "zod";

describe("Validasi Data Primitif", () => {
  // Konversi Type Data (ceorce(otomatis))
  it("should support data convertion", () => {
    const userNameSchema = z.coerce.string().email();
    const isAdminSchema = z.coerce.boolean();
    const priceSchema = z.coerce.number().min(1000).max(1000000);

    const userName = userNameSchema.parse("gifari@ts.com");
    console.info(userName);

    const isAdmin = isAdminSchema.parse("true");
    console.info(isAdmin);

    const price = priceSchema.parse("100000");
    console.info(price);
  });
});
