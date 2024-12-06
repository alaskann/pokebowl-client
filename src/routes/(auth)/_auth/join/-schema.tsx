import { z } from "zod";
import zxcvbn from "zxcvbn";

export const joinSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    name: z.string().min(1, { message: "Name is required" }).trim(),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .refine(
        (value) => {
          return zxcvbn(value).score >= 3;
        },
        { message: "Password is too weak" }
      ),
    passwordConfirm: z
      .string()
      .min(1, { message: "Password must be repeated" }),
  })
  .refine(
    (values) => {
      return values.password === values.passwordConfirm;
    },
    { message: "Passwords do not match", path: ["passwordConfirm"] }
  );

export type JoinSchema = z.infer<typeof joinSchema>;
