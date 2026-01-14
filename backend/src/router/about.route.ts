// router/about.router.ts
import express, { Router } from "express";
import AboutController from "../controller/about.controller";
import { asynErrorHandle } from "../service/asynErrorHandle"; // wrap error

import AuthMiddleware, { Role } from "../middleware/authMiddlewre";
import { upload } from "../service/multer";
const router: Router = express.Router();
// create and update if create xaina vanni chai create if create xa vanni update hunxa
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    upload.single("profileImage"),
    asynErrorHandle(AboutController.createAbout)
  )
  .get(asynErrorHandle(AboutController.getAbout));

router
  .route("/:id")
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(AboutController.deleteAbout)
  )
  .get(asynErrorHandle(AboutController.singleAboutFetch));

export default router;
