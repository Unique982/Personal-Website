import { Request, Response } from "express";
import {
  createSkillSchema,
  skillInputSchema,
  skillUpdateInputSchema,
  updateSkillSchema,
} from "../schema/skill.schema";
import Skill from "../model/skills.model";
class SkillController {
  // create skill
  static async createSkill(req: Request, res: Response) {
    const validatedData: skillInputSchema = createSkillSchema.parse(req.body);
    const { skillname, status } = validatedData;
    const icon = req.file?.path;
    if (!icon)
      return res.status(400).json({ message: "Icon  image is required 🤷‍♂️" });

    // check if skill name same or not
    const existSkill = await Skill.findOne({
      skillname,
    });
    if (existSkill)
      return res.status(409).json({ message: "Skill name already existing🤷‍♂️" });

    await Skill.create({
      skillname,
      icon,
      status,
    });
    res.status(200).json({ message: "Skill created successfully " });
  }
  // fetch skill all
  static async fetchSkill(req: Request, res: Response) {
    const skillData = await Skill.find();
    res.status(200).json({ message: "Fetch all skill😀", data: skillData });
  }
  // delete skill all
  static async deleteSkill(req: Request, res: Response) {
    const { id } = req.params;
    const skill = await Skill.findByIdAndDelete(id);
    if (!skill)
      return res.status(400).json({ message: "Skill id not found🤷‍♂️" });
    res.status(200).json({ message: "Skill delete successfuyl😀" });
  }
  // update skill all
  static async udpateSkill(req: Request, res: Response) {
    const { id } = req.params;
    const skill = await Skill.findById(id);
    if (!skill)
      return res.status(400).json({ message: "Skill id not found🤷‍♂️" });
    const validatedData: skillUpdateInputSchema = updateSkillSchema.parse(
      req.body
    );
    const { skillname, status } = validatedData;
    const icon = req.file?.path;

    // check if skill name same or not
    if (skillname && skillname !== skill.skillname) {
      const existSkill = await Skill.findOne({
        skillname,
        _id: { $ne: id }, // exclude current record
      });

      if (existSkill) {
        return res
          .status(409)
          .json({ message: "Skill name already exists 🤷‍♂️" });
      }

      skill.skillname = skillname;
    }

    if (icon) skill.icon = icon;
    if (status) skill.status = status;
    await skill.save();
    res.status(200).json({ message: "Skill update successfully " });
  }
  // draf skill
  static async statusSkill(req: Request, res: Response) {
    const { id } = req.params;
    const skill = await Skill.findById(id);
    if (!skill)
      return res.status(400).json({ message: "Skill id not found🤷‍♂️" });

    // already read xaina vani only chnage hunxa
    skill.status = skill.status === "active" ? "inactive" : "active";
    await skill.save();
    res
      .status(200)
      .json({ message: `Skill status updated to "${skill.status}" 😀` });
  }
}
export default SkillController;
