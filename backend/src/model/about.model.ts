import mongoose, { Schema, Document } from "mongoose";
// about inter face
export interface IAbout extends Document {
  title: string;
  description: string;
  profileImage: string | null;
}
// create Schema
const AboutSchema = new mongoose.Schema(
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
    profileImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<IAbout>("About", AboutSchema);
