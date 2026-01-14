import express, { Router } from "express";
import AuthMiddleware, { Role } from "../middleware/authMiddlewre";
import { asynErrorHandle } from "../service/asynErrorHandle";
import Experience from "../controller/experience.controller";
import { upload } from "../service/multer";
const router: Router = express.Router();
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.single("icon"),
    asynErrorHandle(Experience.createExperiences)
  )
  .get(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(Experience.fetchExperiences)
  );

router
  .route("/:id")
  .get(asynErrorHandle(Experience.singleExperiencesDetails))
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(Experience.deleteExperiences)
  )
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.single("icon"),
    asynErrorHandle(Experience.updateExperiences)
  );

router
  .route("/status/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(Experience.statusExperiencesUpdate)
  );
export default router;
