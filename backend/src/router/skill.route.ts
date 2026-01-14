import express, { Router } from "express";
import SkillController from "../controller/skill.controller";
import { asynErrorHandle } from "../service/asynErrorHandle";
import AuthMiddleware, { Role } from "../middleware/authMiddlewre";
import { upload } from "../service/multer";
const router: Router = express.Router();
// skill create api
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.single("icon"),
    asynErrorHandle(SkillController.createSkill)
  )
  // fetch all skil api
  .get(asynErrorHandle(SkillController.fetchSkill));
// delete skill api
router
  .route("/:id")
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(SkillController.deleteSkill)
  )
  // update skill api
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.single("icon"),
    asynErrorHandle(SkillController.udpateSkill)
  );
// draft skill api
router
  .route("/status/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(SkillController.statusSkill)
  );
// publich skill api

export default router;
