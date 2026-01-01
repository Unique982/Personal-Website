import express, { Router } from "express";
import ProjectController from "../controller/project.controller";
const router: Router = express.Router();

//create project api
router
  .route("/")
  .post(ProjectController.createProject)
  // fetch all project api
  .get(ProjectController.fetchProject);
// darft status project api
router.route("/draft/:id").patch(ProjectController.darftProject);
// publich status project api
router.route("/publich/:id").patch(ProjectController.publichProject);
// delete project api
router
  .route("/:id")
  .delete(ProjectController.deleteProject)
  // project details fetch api
  .get(ProjectController.fetchProjectDetails)
  // update project api
  .patch(ProjectController.updateProject);

export default router;
