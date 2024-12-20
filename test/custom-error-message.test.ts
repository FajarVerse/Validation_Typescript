import { z, ZodError } from "zod";

describe("Validation Custom Error", () => {
  // Custom Error Message
  it("should support custom error message", () => {
    const loginSchema = z.object({
      username: z.string().email("Ini harus email"),
      password: z
        .string()
        .min(6, "minimal password 6 character")
        .max(20, "maksimal password 20 character"),
    });

    const loginRequest = {
      username: "gifari",
      password: "1237",
    };

    try {
      const result = loginSchema.parse(loginRequest);
    } catch (error) {
      if (error instanceof ZodError) {
        console.info(error.errors);
        error.errors.forEach((err) => {
          console.info(err);
        });
      }
    }
  });
});
