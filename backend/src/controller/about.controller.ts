// about.controller.ts
import { Request, Response } from "express";
import { createAboutSchema } from "../schema/about.schema";
import aboutModel from "../model/about.model";

class AboutController {
  static async createAbout(req: Request, res: Response) {
    try {
      const parsedInput = createAboutSchema.parse({
        title: req.body.title,
        description: req.body.description,
        profileImage: req.body.profileImage,
      });
      const about = await aboutModel.create(parsedInput);

      return res.status(200).json({
        sucess: true,
        message: "About create sucessfully!",
      });
    } catch (err: any) {
      return res.status(400).json({
        success: false,
        message: err.errors?.[0]?.message || err.message,
      });
    }
  }
}
