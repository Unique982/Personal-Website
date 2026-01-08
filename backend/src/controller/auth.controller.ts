import User from "../model/user.model";
import {
  ForgetPasswordInput,
  forgetPasswordSchema,
  LoginInput,
  loginSchema,
  otpVerifySchema,
  profileUpdateSchema,
  resetPasswordSchema,
} from "../schema/auth.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import generateToken from "../service/generatedToken";
import { otpGenerated } from "../service/otpGenerated";
import { sendMail } from "../service/sendEmail";
import { IExtendRequest } from "../middleware/authMiddlewre";

class AuthController {
  static async isLogin(req: Request, res: Response) {
    // input aayu na password and email chai  body aaya ko data validation check grw
    // const pasedInput: LoginInput = loginSchema.parse(req.body);
    const validatedData = loginSchema.parse(req.body);
    const { email, password } = validatedData;

    // find email grw xa
    const user: any = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "No user with that email" });
    } else {
      const isEquel = bcrypt.compareSync(password, user.password);
      if (!isEquel) {
        res.status(400).json({
          messgae: "Invalid password",
        });
      } else {
        const token = generateToken(user.id);
        res.status(200).json({ message: "Logged in success 😀", token });
      }
    }
  }
  static async forgetPassword(req: Request, res: Response) {
    // const pasedInput: ForgetPasswordInput = loginSchema.parse(req.body);
    const validatedData = forgetPasswordSchema.parse(req.body);
    const { email } = validatedData;
    const user: any = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "No user with that email" });
    }
    const otp = otpGenerated();
    // send maila
    await sendMail({
      to: email,
      subject: "Unique Neupane Offical Website Password Reset Request!",
      text: `<h2>Password Reset OTP</h2>
    <p>Your OTP is: <b>${otp}</b></p>
    <p>This OTP is valid for <b>2 minutes</b>.</p>`,
    });
    user.otp = otp;
    user.otpExpiresAt = new Date(Date.now() + 1 * 60 * 1000); //60 sec
    await user.save();
    res.status(200).json({ message: "OTP sent successful!" });
  }
  // otp verify
  static async otpVerify(req: Request, res: Response) {
    const validatedData = otpVerifySchema.parse(req.body);
    const { email, otp } = validatedData;
    const user = await User.findOne({ email });
    if (!user || !user.otp)
      return res.status(400).json({ message: "Invalid request" });
    if (user.otp !== otp) {
      return res.status(400).json({ messgae: "Invalid OTP" });
    }
    if (user.otpExp! < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }
    // OTP success otp code chai null field chai null set hunxa

    user.otp = null;
    user.otpExp = null;
    await user.save();
    res.status(200).json({ message: "Your OTP verified successfully" });
  }
  // new-password
  static async newPassword(req: Request, res: Response) {
    const validatedData = resetPasswordSchema.parse(req.body);
    const { email, newPassword } = validatedData;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No user with that email" });
    }
    // password set
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ message: "Password reset successful" });
  }
  // profile update
  static async updateProfile(req: IExtendRequest, res: Response) {
    const userId = req.user?.id;
    const validatedData = profileUpdateSchema.parse(req.body);
    const { username, email } = validatedData;
    const user: any = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User Id Not found!" });
    }

    // update filed data
    user.email = email;
    user.username = username;
    await user.save();
    res.status(200).json({ message: "Profile updated successfully" });
  }
  // // password update
  // static async passwordUpdate(req: IExtendRequest, res: Response) {
  //   const userId = req.user?.id;
  //   // paxi upload graxu
  // }
  // // logout
  // static async logout(req: Request, res: Response) {}
}

export default AuthController;
