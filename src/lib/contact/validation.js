import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(80, "First name must be 80 characters or fewer"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(254, "Email must be 254 characters or fewer"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be 5000 characters or fewer"),
});
