import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    userName: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
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
      message: {
        type: String,
      },
      repliedBy: {
        type: String, // admin name/email
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
