import { z } from "zod";

describe("Validasi Object", () => {
  // Validais Object (object())
  it("should support validasi object", () => {
    const loginSchema = z.object({
      username: z.string().email(),
      password: z.string().min(8).max(15),
    });

    const loginRequest = {
      username: "gifari@test.com",
      password: "12345678",
      age: 17,
    };

    const result = loginSchema.parse(loginRequest);
    console.info(result);
  });

  // Validasi Object Nested (object didalam obeject)
  it("should support validasi nested object", () => {
    const createUserSchema = z.object({
      id: z.string().min(3).max(6),
      name: z.string().max(100),
      address: z.object({
        street: z.string().max(100),
        city: z.string().max(50),
        zip: z.string().max(20),
        country: z.string().max(50),
      }),
    });

    const request = {
      id: "U01",
      name: "Gifari Fajar Maulana",
      address: {
        street: "Jl. Teluk Bango 01",
        city: "Bekasi",
        zip: "123236",
        country: "Indonesia",
      },
    };

    const result = createUserSchema.parse(request);
    console.info(result);
  });
});
