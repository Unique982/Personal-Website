import mongoose from "mongoose";

const ServiceSchame = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: String,
      },
    ],
    features: [
      {
        type: [String],
        default: [],
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", ServiceSchame);
