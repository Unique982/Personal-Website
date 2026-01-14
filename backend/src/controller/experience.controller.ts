import { Request, Response } from "express";
import {
  createExperienceSchema,
  experienceInputSchema,
  experienceUpdateInputSchema,
  updateExperienceSchema,
} from "../schema/experience.schema";
import Experiences from "../model/experience.model";
class Experience {
  static async createExperiences(req: Request, res: Response) {
    const validatedData: experienceInputSchema = createExperienceSchema.parse(
      req.body
    );
    const { title, description, startYear, endYear, company, status } =
      validatedData;
    const icon = req.file?.path;
    if (!icon) return res.status(400).json({ message: "Icon is required🤷‍♂️" });
    await Experiences.create({
      title,
      description,
      startYear,
      endYear,
      company: company || null,
      icon,
      status,
    });
    res.status(200).json({ messgae: "Experience create sucess " });
  }
  static async fetchExperiences(req: Request, res: Response) {
    const experiences = await Experiences.find();
    res
      .status(200)
      .json({ message: "Fetch all experiences😀", data: experiences });
  }
  static async deleteExperiences(req: Request, res: Response) {
    const { id } = req.params;
    const experience = await Experiences.findByIdAndDelete(id);
    if (!experience)
      return res.status(404).json({ message: "Experiences id not found🤷‍♂️" });
    res.status(200).json({ message: "Experiences delete successful😀" });
  }
  static async singleExperiencesDetails(req: Request, res: Response) {
    const { id } = req.params;
    const experience = await Experiences.findById(id);
    if (!experience)
      return res.status(404).json({ message: "Experiences id not found🤷‍♂️" });
    res
      .status(200)
      .json({ message: "Experiences details successful😀", data: experience });
  }
  static async statusExperiencesUpdate(req: Request, res: Response) {
    const { id } = req.params;
    const experience = await Experiences.findById(id);
    if (!experience)
      return res.status(400).json({ message: "expericence id not found🤷‍♂️" });

    // already read xaina vani only chnage hunxa
    experience.status = experience.status === "publich" ? "draft" : "publich";
    await experience.save();
    res.status(200).json({
      message: `Experience status updated to "${experience.status}" 😀`,
    });
  }
  static async updateExperiences(req: Request, res: Response) {
    const { id } = req.params;

    const experience = await Experiences.findById(id);
    if (!experience)
      return res.status(404).json({ message: "Experience id not found 🤷‍♂️" });

    // Validate request body
    const validatedData = updateExperienceSchema.parse(req.body);

    // Update only provided fields
    Object.assign(experience, validatedData);

    // Save updated document
    await experience.save();
  }
}
export default Experience;
