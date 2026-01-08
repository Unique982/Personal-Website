import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  description: z.string().min(10, "Description is required"),
  longDescription: z.string().min(20, "Long description is required"),
  coverImage: z.string().optional(),
  //array of non-empty strings
  subImage: z.array(z.string().min(1)).optional().default([]),
  category: z.string().min(1, "Category is required"),
  //array of non-empty strings
  tag: z.array(z.string().min(1)).optional().default([]),
  status: z.enum(["draft", "publish"]).optional().default("draft"),
});
export const updateBlogSchema = z.object({
  title: z.string().min(3, "Title is required").optional(),
  slug: z.string().min(3, "Slug is required").optional(),
  description: z.string().min(10, "Description is required").optional(),
  longDescription: z
    .string()
    .min(20, "Long description is required")
    .optional(),
  coverImage: z.string().optional(),
  subImage: z.array(z.string().min(1)).optional(),
  category: z.string().min(1, "Category is required").optional(),
  tag: z.array(z.string().min(1)).optional(),
  status: z.enum(["draft", "publish"]).optional(),
});

export type blogInputSchema = z.infer<typeof createBlogSchema>;
export type updateBlogInputSchema = z.infer<typeof updateBlogSchema>;
