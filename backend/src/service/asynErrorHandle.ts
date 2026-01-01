import { Request, Response } from "express";

export const asynErrorHandle = (fn: Function) => {
  return (req: Request, res: Response) => {
    fn(req, res).catch((err: Error) => {
      res.status(500).json({
        message: "Invalid errr",
        error: err.message,
      });
    });
  };
};
