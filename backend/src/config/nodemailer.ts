// configure code email
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // here your email
    pass: process.env.EMAIL_PASS, // here googel app password
  },
});
export default transporter;
