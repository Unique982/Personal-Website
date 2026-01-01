import jwt from "jsonwebtoken";
import User from "../model/user.model";
import { NextFunction, Request, Response } from "express";

class AuthMiddleware {
  static async isUserLoggeedIn(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const token = req.headers.authorization;
    // if token xaina vani
    if (!token) {
      res.status(403).json({
        message: "Token must be provided",
      });
      return;
    }
    // if token aayo vani valida garnu paro
    jwt.verify(
      token,
      process.env.jwtSecretKey as string,
      async (err, result: any) => {
        if (err) {
          res.status(403).json({
            message: "Invalid token!",
          });
        } else {
          const userData = await User.findById(result.userId);
          if (!userData) {
            res.status(404).json({
              message: "No user with that userId!",
            });
            return;
          }
          (req as any).user = userData;
          next();
        }
      }
    );
  }
}

export default AuthMiddleware;
