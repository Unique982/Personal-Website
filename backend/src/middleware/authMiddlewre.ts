import jwt from "jsonwebtoken";
import User from "../model/user.model";
import { NextFunction, Request, Response } from "express";

export interface IRole {
  Admin: "admin";
  User: "user";
}
//Extend Express Request to include user
export interface IExtendRequest extends Request {
  user?: {
    id: string;
    userName?: {
      firstName: string;
      lastName: string;
    } | null;
    email: string;
    role: string;
    password: string;
  };
}
export enum Role {
  Admin = "admin",
  User = "user",
}

class AuthMiddleware {
  static async isUserLoggeedIn(
    req: IExtendRequest,
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
          return res.status(403).json({
            message: "Invalid token!",
          });
        }
        try {
          const userData = await User.findById(result.userId);
          if (!userData) {
            res.status(404).json({
              message: "No user with that userId!",
            });
            return;
          }
          req.user = userData as any;
          next();
        } catch (error) {
          res.status(500).json({ message: "Something went wrong" });
        }
      }
    );
  }
  // role base access control
  static restirectToUser(...roles: Role[]) {
    return (req: IExtendRequest, res: Response, next: NextFunction) => {
      let userRole = req.user?.role as Role;

      if (!roles.includes(userRole)) {
        res.status(403).json({ message: "You dont have permission😭" });
      } else {
        next();
      }
    };
  }
}

export default AuthMiddleware;
