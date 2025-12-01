import { z } from "zod";

export const loginSchema = z.object({
  name: z.string().min(3, { error: "Name must be 3 letters" }).optional(),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
