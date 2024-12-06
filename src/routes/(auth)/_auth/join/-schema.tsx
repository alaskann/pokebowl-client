import { z } from "zod";

export const joinSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  name: z.string({ message: "Name is required" }).trim(),
  password: z.string({ message: "Password is required" }).refine((val) => true), // TODO: Add xcvbn validation
});

export type JoinSchema = z.infer<typeof joinSchema>;
