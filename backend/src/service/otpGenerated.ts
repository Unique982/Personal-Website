import { Request, Response } from "express";
export const otpGenerated = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

// export const checkOtpExpiration = (req: Request, res: Response) => {
//   const currentTime =
// };
