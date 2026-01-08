// src/service/asynErrorHandle.ts
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const asynErrorHandle = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err: Error) => {
      // ZodValidation
      if (err instanceof ZodError) {
        res.status(400).json({
          status: "fail",
          message: "Zod validation  Error",
          // error ko thau maila issues user garay
          errors: err.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });
      }
      res.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: err.message,
      });
    });
  };
};
