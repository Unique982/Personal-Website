import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
    },
    startYear: {
      type: String,
      required: true,
    },
    endYear: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    status: {
      type: String,
      enum: ["draft", "publich"],
      default: "draft",
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Experience", ExperienceSchema);
