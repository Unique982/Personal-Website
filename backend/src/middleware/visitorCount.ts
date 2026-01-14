import { Request, Response, NextFunction } from "express";

import VisitorCount from "../model/visitorCount.model";

export const countVisitor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // yati cookie xaina vani chai new visitor count hunxa
    if (!req.cookies?.visited) {
      await VisitorCount.create({ date: new Date() });

      // 1 दिन cookie set
      res.cookie("visited", "yes", { maxAge: 24 * 60 * 60 * 1000 });
    }
    next();
  } catch (err) {
    next();
  }
};
