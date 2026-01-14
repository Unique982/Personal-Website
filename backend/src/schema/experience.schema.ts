import { z } from "zod";
const dateString = z.preprocess((val) => {
  if (val instanceof Date) {
    return val.toISOString().split("T")[0];
  }
  return val;
}, z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"));
export const createExperienceSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  company: z.string().trim().optional(),
  startYear: dateString,
  endYear: dateString,
  icon: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  status: z.enum(["draft", "publish"]).optional().default("draft"),
});
export const updateExperienceSchema = z.object({
  title: z.string().trim().min(1, "Title is required").optional(),
  company: z.string().trim().optional(),
  startYear: dateString.optional(),
  endYear: dateString.optional(),
  icon: z.string().optional(),
  description: z.string().min(1, "Description is required").optional(),
  status: z.enum(["draft", "publish"]).optional(),
});
export type experienceInputSchema = z.infer<typeof createExperienceSchema>;
export type experienceUpdateInputSchema = z.infer<
  typeof updateExperienceSchema
>;
