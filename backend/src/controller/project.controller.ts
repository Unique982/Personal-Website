import { Request, Response } from "express";
import { IExtendRequest } from "../middleware/authMiddlewre";
import { ProjectInput, projectSchema } from "../schema/project.schema";
import Project from "../model/project.model";
class ProjectController {
  // create project
  static async createProject(req: IExtendRequest, res: Response) {
    const validatedData: ProjectInput = projectSchema.parse(req.body);
    const {
      title,
      shortDescription,
      overview,
      longDescription,
      projectImage,
      techStack,
      keyFeatures,
      liveDemoLink,
      githubLinks,
      screenshots,
      status,
      projectStatus,
    } = validatedData;

    // manual check for required fields
    if (
      !title ||
      !shortDescription ||
      !overview ||
      !longDescription ||
      !projectImage
    ) {
      return res.status(400).json({ message: "All fields required!" });
    }

    const projectData = new Project(validatedData);
    await projectData.save();
    res
      .status(201)
      .json({ message: "Project created successfully", projectData });
  }
  // fetch all project
  static async fetchProject(req: Request, res: Response) {}
  // draft project
  static async darftProject(req: Request, res: Response) {}
  // publich project
  static async publichProject(req: Request, res: Response) {}
  // delete project
  static async deleteProject(req: Request, res: Response) {}
  // Update project
  static async updateProject(req: Request, res: Response) {}
  // fetch project details
  static async fetchProjectDetails(req: Request, res: Response) {}
}
export default ProjectController;
