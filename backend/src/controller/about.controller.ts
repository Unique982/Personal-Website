// about.controller.ts
import { Response } from "express";
// import { CreateAboutInput, createAboutSchema } from "../schema/about.schema";
import About from "../model/about.model";
import { IExtendRequest } from "../middleware/authMiddlewre";
import { CreateAboutInput, createAboutSchema } from "../schema/about.schema";

class AboutController {
  static async createAbout(req: IExtendRequest, res: Response) {
    const validatedData: CreateAboutInput = createAboutSchema.parse(req.body);
    const { title, description } = validatedData;
    const profileImage = req.file?.path;
    if (!profileImage) {
      return res.status(400).json({ message: "Profile image is required🤷‍♂️" });
    }
    // 3. Save the validated data (which now includes profileImage)
    let about = await About.findOne();
    if (about) {
      (about.title = title), (about.description = description);
      about.profileImage = profileImage;
      await about.save();
      return res.status(200).json({ message: "About update successful😀" });
    } else {
      about = await About.create({ title, description, profileImage });
      return res.status(200).json({
        success: true,
        message: "About created successfully😀",
        about,
      });
    }
  }
  static async getAbout(req: IExtendRequest, res: Response) {
    const abouts = await About.find();
    if (!abouts || abouts.length === 0) {
      return res.status(404).json({ message: "No about found!" });
    }
    res.status(200).json({
      message: "All about entries fetched successfully😀",
      data: abouts,
    });
  }
  static async deleteAbout(req: IExtendRequest, res: Response) {
    const { id } = req.params;
    const aboutDelete = await About.findByIdAndDelete(id);
    if (!aboutDelete) {
      return res.status(404).json({ message: "About id not found😢" });
    }
    res.status(200).json({ message: "Delete successful😀" });
  }
  static async singleAboutFetch(req: IExtendRequest, res: Response) {
    const { id } = req.params;
    const abouts = await About.findOne();
    if (!abouts) {
      return res.status(404).json({ message: "about not found😢" });
    }
    res
      .status(200)
      .json({ messgae: "About details fetch successful😀", data: abouts });
  }
}

export default AboutController;
