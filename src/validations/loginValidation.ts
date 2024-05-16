import { loginError } from "@/constants/errorMessages";
import { z } from "zod";

export const LoginValidationSchema = z.object({
  email: z.string().email(loginError.emailField),
  password: z
    .string()
    .min(4, loginError.passwordMin)
    .max(8, loginError.passwordMax),
  //   rememberMe: z.boolean(),
});

export type loginFormState = z.infer<typeof LoginValidationSchema>;
