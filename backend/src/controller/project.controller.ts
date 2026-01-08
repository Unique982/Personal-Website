import { Request, Response } from "express";
import { IExtendRequest } from "../middleware/authMiddlewre";
import {
  ProjectInput,
  projectSchema,
  ProjectUpdateInput,
  projectUpdateSchema,
} from "../schema/project.schema";
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
      techStack,
      keyFeatures,
      liveDemoLink,
      githubLinks,
      status,
      projectStatus,
    } = validatedData;
    console.log(req.body);
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const projectImage = files["projectImage"]?.[0]?.path;
    if (!projectImage)
      return res.status(400).json({ message: "Project image is required 🤷‍♂️" });

    const screenshots = (files["screenshots"] || []).map((file) => file.path);
    const projectData = await Project.create({
      title,
      shortDescription,
      overview,
      longDescription,
      techStack,
      keyFeatures,
      liveDemoLink: liveDemoLink || null,
      githubLinks: githubLinks || null,
      status,
      projectStatus,
      projectImage,
      screenshots,
    });
    res
      .status(201)
      .json({ message: "Project created successfully😀", projectData });
  }
  // fetch all project
  static async fetchProject(req: Request, res: Response) {
    const data = await Project.find();

    return res.status(200).json({
      message: "Project list fetch successful😀 ",
      data: data,
    });
  }
  // draft project
  static async darftProject(req: Request, res: Response) {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project id not found😢" });
    }
    project.projectStatus = "draft";
    await project.save();
    res
      .status(200)
      .json({ message: "ProjecProject set to draft successful😀 " });
  }
  // publich project
  static async publichProject(req: Request, res: Response) {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project id not found😢" });
    }
    project.projectStatus = "publish";
    await project.save();
    res.status(200).json({ message: "Project set to publish successful😀 " });
  }
  // delete project
  static async deleteProject(req: Request, res: Response) {
    const { id } = req.params;
    const deleteProject = await Project.findByIdAndDelete(id);
    if (!deleteProject) {
      return res.status(400).json({ message: "Project id not found😢" });
    }
    res.status(200).json({ message: "Project delete successful😀" });
  }
  // Update project
  static async updateProject(req: Request, res: Response) {
    const { id } = req.params;
    const validatedData: ProjectUpdateInput = projectUpdateSchema.parse(
      req.body
    );
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const newProjectImage = files?.["projectImage"]?.[0]?.path;
    const newScreenshots = (files?.["screenshots"] || []).map(
      (file) => file.path
    );

    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project id not found🤷‍♂️" });
    }

    // merger only provide filed
    // target -> object lai update garna kam lag xa
    // project -> objetc ko values target set garxa
    Object.assign(project, validatedData);

    await project.save();
    res.status(200).json({ message: "Project update successful😀" });
  }
  // fetch project details
  static async fetchProjectDetails(req: Request, res: Response) {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "Project id not found😢" });
    }
    res
      .status(200)
      .json({ message: "Project datils fetch successful😀 ", data: project });
  }
}
export default ProjectController;
