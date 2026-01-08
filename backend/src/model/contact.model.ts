import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    username: {
      firstname: {
        type: String,
        required: true,
        trim: true,
      },
      lastname: {
        type: String,
        required: true,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["unread", "read", "replied"],
      default: "unread",
    },
    reply: {
      subject: {
        type: String,
        trim: true,
      },
      message: {
        type: String,
      },
      repliedBy: {
        type: String,
      },
      repliedAt: {
        type: Date,
      },
    },

    isStarred: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Contact", ContactSchema);
