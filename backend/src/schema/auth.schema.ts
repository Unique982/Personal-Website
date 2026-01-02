import { z } from "zod";
// login input defin validation schema
export const loginSchema = z.object({
  email: z.string().email("Invalid email address").trim(),
  password: z.string().min(6),
});
// forget password input validation schema
export const forgetPasswordSchema = z.object({
  email: z.string().email("Invalid email address").trim(),
});

// otp verify input define validation schema
export const otpVerifySchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  otp: z.string().length(6),
});

// new  reset password input define validation schema
export const resetPasswordSchema = z
  .object({
    email: z.string().email("Invalid email address").trim(),
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .trim(),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters")
      .trim(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// profile update Schema
export const profileUpdateSchema = z.object({
  username: z.object({
    firstname: z
      .string()
      .min(1, "First name is required")
      .max(20, "First name is too long")
      .trim(),
    lastname: z
      .string()
      .min(1, "Last name is required")
      .max(20, "Last name is too long")
      .trim(),
  }),
  email: z.string().email("Invalid email address").trim(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type ForgetPasswordInput = z.infer<typeof forgetPasswordSchema>;
export type otpVerifyInput = z.infer<typeof otpVerifySchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type profileUpdateInput = z.infer<typeof profileUpdateSchema>;
