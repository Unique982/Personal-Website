import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    // title
    title: {
      type: String,
      required: true,
      trim: true,
    },
    //sluf
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    longDescription: {
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
    status: {
      type: String,
      enum: ["draft", "publich"],
      default: "draft",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Blogs", BlogSchema);
