import express, { Router } from "express";
import SkillController from "../controller/skill.controller";
const router: Router = express.Router();
// skill create api
router
  .route("/")
  .post(SkillController.createSkill)
  // fetch all skil api
  .get(SkillController.fetchSkill);
// delete skill api
router
  .route("/:id")
  .delete(SkillController.deleteSkill)
  // update skill api
  .patch(SkillController.udpateSkill);
// draft skill api
router.route("/draft/:id").patch(SkillController.draftSkill);
// publich skill api
router.route("/publich/:id").patch(SkillController.publichSkill);

export default router;
