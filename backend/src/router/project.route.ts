import express, { Router } from "express";
import ProjectController from "../controller/project.controller";

import AuthMiddleware, { Role } from "../middleware/authMiddlewre";
import { asynErrorHandle } from "../service/asynErrorHandle";
import { upload } from "../service/multer";
const router: Router = express.Router();

//create project api
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.fields([
      { name: "projectImage", maxCount: 1 },
      { name: "screenshots", maxCount: 5 },
    ]),
    asynErrorHandle(ProjectController.createProject)
  )
  // fetch all project api
  .get(asynErrorHandle(ProjectController.fetchProject));
// darft status project api
router
  .route("/draft/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ProjectController.darftProject)
  );
// publich status project api
router
  .route("/publich/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ProjectController.publichProject)
  );
// delete project api
router
  .route("/:id")
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(ProjectController.deleteProject)
  )
  // project details fetch api
  .get(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(ProjectController.fetchProjectDetails)
  )
  // update project api
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.fields([
      { name: "projectImage", maxCount: 1 },
      { name: "screenshots", maxCount: 5 },
    ]),
    asynErrorHandle(ProjectController.updateProject)
  );

export default router;
