import mongoose, { model } from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    skillname: {
      type: String,
      required: true,
      unique: true,
    },
    icon: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Skills", SkillSchema);
