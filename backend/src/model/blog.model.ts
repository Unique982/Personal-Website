import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String, // short description below title
      required: true,
      trim: true,
    },
    blogDescription: {
      type: String,
      required: true,
      trim: true,
    },
    coverImage: {
      type: String,
    },
    subImage: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
    },
    tag: {
      type: [String],
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Blogs", BlogSchema);
