import mongoose from "mongoose";
import { string } from "zod";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    projectImage: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
      trim: true,
    },
    keyFeatures: {
      type: [String],
      default: [],
    },
    screenshots: {
      type: [String],
      default: [],
    },
    techStack: {
      type: [String],
      default: [],
    },
    githubLinks: {
      backend: {
        type: String,
        default: "",
      },
      frontend: {
        type: String,
        default: "",
      },
    },
    liveDemoLink: {
      type: String,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Project", ProjectSchema);
