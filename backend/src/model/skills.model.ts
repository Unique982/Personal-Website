import mongoose, { model } from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    skill: {
      type: [String],
      required: true,
      default: [],
    },
    icon: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skills", SkillSchema);
