import jwt from "jsonwebtoken";

const generateToken = (userId: string | number) => {
  const token = jwt.sign(
    { userId: userId },
    process.env.jwtSecretKey as string,

    { expiresIn: process.env.jwtExpiresIn }
  );
  return token;
};
export default generateToken;
