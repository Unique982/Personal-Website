import jwt from "jsonwebtoken";
import User from "../model/user.model";

class AuthMiddleware {
  static async isUserLoggeedIn(req: any, res: any, next: any): Promise<void> {
    const token = req.header.authorization;
    // if token xaina vani
    if (!token) {
      req.status(403).json({
        message: "Token must be provided",
      });
      return;
    }
    // if token aayo vani valida garnu paro
    jwt.verify(
      token,
      process.env.jwtSecretKey as string,
      async (err: any, result: any) => {
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
          req.user = userData;
          next();
        }
      }
    );
  }
}
