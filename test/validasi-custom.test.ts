import { z, ZodError } from "zod";

describe("Validation Custon", () => {
  it("should support custom validation", () => {
    const loginSchema = z.object({
      username: z.string().transform((data, ctx) => {
        if (data != data.toUpperCase()) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "username harus uppercase",
          });
          return z.NEVER;
        } else {
          return data;
        }
      }),
      password: z.string().min(5).max(10),
    });

    const requset = {
      username: "gifari",
      password: "12352",
    };

    try {
      const result = loginSchema.parse(requset);
      console.info(result);
    } catch (e) {
      if (e instanceof ZodError) {
        console.info(e.errors);
      }
    }

    const request2 = {
      username: "NAZWA",
      password: "nazwa213",
    };

    try {
      const result = loginSchema.parse(request2);
      console.info(result);
    } catch (e) {
      if (e instanceof ZodError) {
        console.info(e.errors);
      }
    }
  });
});
