// about.controller.ts
import { Request, Response } from "express";
import { createAboutSchema } from "../schema/about.schema";
import About from "../model/about.model";
import { IExtendRequest } from "../middleware/authMiddlewre";

class AboutController {
  static async createAbout(req: IExtendRequest, res: Response) {
    // Zod validation safeParse use
    const result = createAboutSchema.safeParse(req.body);
    if (!result.success) {
      // validation error return
      return res.status(400).json({ errors: result.error });
    }

    const validatedData = result.data;
    const { title, description, profileImage } = validatedData;

    if (!title || !description || !profileImage) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const about = new About(validatedData);
    await about.save();

    return res.status(200).json({
      success: true,
      message: "About created successfully!",
      about,
    });
  }
}

export default AboutController;
