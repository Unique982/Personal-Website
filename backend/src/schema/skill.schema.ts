import { z } from "zod";
export const createSkillSchema = z.object({
  skillname: z
    .string()
    .trim()
    .min(1, "Skill cannot be empty")
    .min(1, "At least one skill is required"),
  icon: z.string().trim().url("Icon must be a valid URL").optional(),
  status: z.enum(["active", "inactive"]).optional().default("inactive"),
});
export const updateSkillSchema = z.object({
  skillname: z
    .string()
    .trim()
    .min(1, "Skill cannot be empty")
    .min(1, "At least one skill is required")
    .optional(),
  icon: z.string().trim().url("Icon must be a valid URL").optional(),
  status: z.enum(["active", "inactive"]).optional().default("inactive"),
});

export type skillInputSchema = z.infer<typeof createSkillSchema>;
export type skillUpdateInputSchema = z.infer<typeof updateSkillSchema>;
