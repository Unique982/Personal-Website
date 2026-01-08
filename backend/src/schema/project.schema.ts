import { z } from "zod";
export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").trim(),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters")
    .trim(),
  overview: z
    .string()
    .min(10, "Overview must be at least 10 characters")
    .trim(),
  longDescription: z
    .string()
    .min(20, "Long description must be at least 20 characters")
    .trim(),

  techStack: z.preprocess((val) => {
    if (typeof val === "string") return [val];
    return val;
  }, z.array(z.string().min(1, "Tech stack item cannot be empty")).optional().default([])),

  keyFeatures: z.preprocess((val) => {
    if (typeof val === "string") return [val];
    return val;
  }, z.array(z.string().min(1, "Feature cannot be empty")).optional().default([])),

  liveDemoLink: z.string().url("Live demo link must be a valid URL").optional(),

  githubLinks: z
    .object({
      backend: z
        .string()
        .url("Backend link must be valid URL")
        .optional()
        .default(""),
      frontend: z
        .string()
        .url("Frontend link must be valid URL")
        .optional()
        .default(""),
    })
    .optional(),

  screenshots: z
    .array(z.string().url("Screenshot must be a valid URL"))
    .optional()
    .default([]),
  status: z
    .enum(["completed", "ongoing", "pending"])
    .optional()
    .default("pending"),
  projectStatus: z.enum(["draft", "publish"]).optional().default("draft"),
});
export const projectUpdateSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .trim()
    .optional(),
  shortDescription: z
    .string()
    .min(10, "Short description must be at least 10 characters")
    .trim()
    .optional(),
  overview: z
    .string()
    .min(10, "Overview must be at least 10 characters")
    .trim()
    .optional(),
  longDescription: z
    .string()
    .min(20, "Long description must be at least 20 characters")
    .trim()
    .optional(),
  projectImage: z.string().url("Project image must be a valid URL").optional(),
  techStack: z
    .array(z.string().min(1, "Tech stack item cannot be empty"))
    .optional(),
  keyFeatures: z.array(z.string().min(1, "Feature cannot be empty")).optional(),
  liveDemoLink: z.string().url("Live demo link must be valid URL").optional(),
  githubLinks: z
    .object({
      backend: z.string().url("Backend link must be valid URL").optional(),
      frontend: z.string().url("Frontend link must be valid URL").optional(),
    })
    .optional(),
  screenshots: z
    .array(z.string().url("Screenshot must be valid URL"))
    .optional(),
  status: z.enum(["completed", "ongoing", "pending"]).optional(),
  projectStatus: z.enum(["draft", "publish"]).optional(),
});

export type ProjectInput = z.infer<typeof projectSchema>;
export type ProjectUpdateInput = z.infer<typeof projectUpdateSchema>;
