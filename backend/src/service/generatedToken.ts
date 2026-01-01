import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const generateToken = (userId: string) => {
  const token = jwt.sign(
    { userId: userId },
    process.env.jwtSecretKey as string,
    {
      expiresIn: process.env.jwtExpiresIn! as any,
    }
  );
  return token;
};
export default generateToken;
