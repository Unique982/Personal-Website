import { Request, Response } from "express";
class ProjectController {
  // create project
  static async createProject(req: Request, res: Response) {}
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
