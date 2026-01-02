import mongoose from "mongoose";
import { string } from "zod";

const ProjectSchema = new mongoose.Schema(
  {
    // title
    title: {
      type: String,
      required: true,
      trim: true,
    },
    // slug
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    // description
    overview: {
      type: String,
      required: true,
      trim: true,
    },
    //long description
    longDescription: {
      type: String,
      required: true,
      trim: true,
    },
    // image
    projectImage: {
      type: String,
      required: true,
    },
    // stack
    techStack: {
      type: [String],
      default: [],
    },
    // features
    keyFeatures: {
      type: [String],
      default: [],
    },
    // live
    liveDemoLink: {
      type: String,
    },
    // github link
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
    screenshots: {
      type: [String],
      default: [],
    },
    // project status like
    status: {
      type: String,
      enum: ["completed", "ongoing", "pending"],
      default: "pending",
    },
    projectStatus: {
      type: String,
      enum: ["draft", "publish"],
      default: "draft",
    },
  },

  { timestamps: true }
);
export default mongoose.model("Project", ProjectSchema);
