import { z } from "zod";
export const createServicesScheme = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().trim().min(1, "Description is required"),
  icon: z.string().trim().url("Icon must be a valid URL").optional(),
  features: z.preprocess((val) => {
    if (typeof val === "string") return [val];
    return val;
  }, z.array(z.string().min(1, "Feature cannot be empty")).optional().default([])),
  status: z.enum(["active", "inactive"]).default("inactive"),
});
export const serviceUpdateSchema = z.object({
  title: z.string().trim().min(1, "Title cannot be empty").optional(),
  description: z
    .string()
    .trim()
    .min(1, "Description cannot be empty")
    .optional(),
  icon: z.string().trim().url("Icon must be a valid URL").optional(),
  features: z.array(z.string().trim()).optional(),
  status: z.enum(["active", "inactive"]).optional(),
});

export type servicesInputSchema = z.infer<typeof createServicesScheme>;
export type serviceUpdateInput = z.infer<typeof serviceUpdateSchema>;
