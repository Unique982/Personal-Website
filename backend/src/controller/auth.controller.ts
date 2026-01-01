import User from "../model/user.model";
import { loginInput, loginSchema } from "../schema/auth.schema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import generateToken from "../service/generatedToken";

class AuthController {
  static async isLogin(req: Request, res: Response) {
    // input aayu na password and email chai  body aaya ko data validation check grw
    const pasedInput: loginInput = loginSchema.parse(req.body);

    // find email grw xa
    const user: any = await User.findOne({ email: pasedInput.email });
    if (!user) {
      return res.status(404).json({ message: "No user with that email" });
    } else {
      const isEquel = bcrypt.compareSync(pasedInput.password, user.password);
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
  static async forgetPassword(req: Request, res: Response) {}
  // otp verify
  static async otpVerify(req: Request, res: Response) {}
  // new-password
  static async newPassword(req: Request, res: Response) {}
  // profile update
  static async updateProfile(req: Request, res: Response) {}
  // password update
  static async passwordUpdate(req: Request, res: Response) {}
  // logout
  static async logout(req: Request, res: Response) {}
}

export default AuthController;
