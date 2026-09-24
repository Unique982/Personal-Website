"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  description: z.string().min(10),
  longDescription: z.string(),
  image: z.string().url(),
  techStack: z.string(), // We will split this on submit
  features: z.string(),
  liveUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
  screenshots: z.string(),
  status: z.enum(["completed", "ongoing", "pending"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { status: "pending" },
  });

  const onSubmit = (data: FormValues) => {
    // Format strings into arrays for the final payload
    const payload = {
      ...data,
      techStack: data.techStack.split(",").map((i) => i.trim()),
      features: data.features.split(",").map((i) => i.trim()),
      screenshots: data.screenshots.split(",").map((i) => i.trim()),
    };
    console.log("Form Payload:", payload);
  };

  const inputStyles =
    "w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white text-slate-900 border-gray-300";
  const labelStyles = "block text-sm font-medium text-gray-700";
  const errorStyles = "text-xs text-red-500 mt-1";

  return (
    <div className="max-w-7xl mx-auto p-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200"
      >
        <div className="border-b border-gray-100 pb-5">
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Project Details
          </h2>
          <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">
            Fill in the essential information below to showcase your project on
            your portfolio site. Clear descriptions help visitors understand
            your work better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className={labelStyles}>Project Title</label>
            <input
              {...register("title")}
              className={inputStyles}
              placeholder="E-commerce App"
            />
            {errors.title && (
              <p className={errorStyles}>{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div>
            <label className={labelStyles}>Slug</label>
            <input
              {...register("slug")}
              className={inputStyles}
              placeholder="my-project-slug"
            />
            {errors.slug && (
              <p className={errorStyles}>{errors.slug.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className={labelStyles}>Status</label>
            <select {...register("status")} className={inputStyles}>
              <option value="pending">Pending</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Main Image */}
          <div>
            <label className={labelStyles}>Cover Image URL</label>
            <input
              {...register("image")}
              className={inputStyles}
              placeholder="https://..."
            />
            {errors.image && (
              <p className={errorStyles}>{errors.image.message}</p>
            )}
          </div>
        </div>

        {/* Descriptions */}
        <div>
          <label className={labelStyles}>Short Description</label>
          <input {...register("description")} className={inputStyles} />
        </div>

        <div>
          <label className={labelStyles}>Long Description</label>
          <textarea
            {...register("longDescription")}
            rows={4}
            className={inputStyles}
          />
        </div>

        {/* Array Inputs (String to Array) */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-4">
          <div>
            <label className={labelStyles}>Tech Stack (comma separated)</label>
            <input
              {...register("techStack")}
              className={inputStyles}
              placeholder="Next.js, Tailwind, TypeScript"
            />
          </div>
          <div>
            <label className={labelStyles}>Features (comma separated)</label>
            <input
              {...register("features")}
              className={inputStyles}
              placeholder="Auth, Stripe, Search"
            />
          </div>
          <div>
            <label className={labelStyles}>
              Screenshots (comma separated URLs)
            </label>
            <input
              {...register("screenshots")}
              className={inputStyles}
              placeholder="url1, url2"
            />
          </div>
        </div>

        {/* URLs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelStyles}>Live URL</label>
            <input {...register("liveUrl")} className={inputStyles} />
          </div>
          <div>
            <label className={labelStyles}>GitHub URL</label>
            <input {...register("githubUrl")} className={inputStyles} />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Save Project
        </button>
      </form>
    </div>
  );
}
