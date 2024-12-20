import { z } from "zod";

describe("Validation Optional", () => {
  // Validasi Optional (.optional() dipakai di akhir)
  it("should support optional validation", () => {
    const registerSchema = z.object({
      username: z.string().email(),
      password: z.string().min(8).max(20),
      firstName: z.string().min(3).max(100),
      lastName: z.string().min(3).max(100).optional(),
    });

    const request = {
      username: "nazwa@test.com",
      password: "123457689",
      firstName: "Nazwa",
    };

    const result = registerSchema.parse(request);
    console.info(result);
  });
});
