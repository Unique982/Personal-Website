// schema/about.schema
import z from "zod";

export const createAboutSchema = z.object({
  title: z.string().trim().min(1, "About title is required!"),
  description: z
    .string()
    .trim()
    .min(30, "Description must be at least 30 characters")
    .max(1000, "Description must be under 1000 characters"),
  profileImage: z.string().optional(),
});
export type CreateAboutInput = z.infer<typeof createAboutSchema>;
