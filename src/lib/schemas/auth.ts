import { z } from "zod";
import zxcvbn from "zxcvbn";

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    newPassword: z
      .string()
      .min(1, { message: "New password is required" })
      .refine((value) => value.length === 0 || zxcvbn(value).score >= 3, {
        message: "Password is too weak",
      }),
    repeatedNewPassword: z
      .string()
      .min(1, { message: "Please repeat password" }),
  })
  .refine(
    (values) => {
      return values.newPassword === values.repeatedNewPassword;
    },
    { message: "Passwords do not match", path: ["repeatedNewPassword"] }
  );

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

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
      .refine((value) => value.length === 0 || zxcvbn(value).score >= 3, {
        message: "Password is too weak",
      }),
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
