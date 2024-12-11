import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 character")
  .max(20, "Username should less than 20 chracter")
  .regex(/^[a-zA-Z0-9]+$/, "Username should not not contain special chracter");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 character" })
    .max(12, { message: "Password should not more than 12 character" }),
});
