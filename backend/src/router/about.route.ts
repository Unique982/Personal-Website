// router/about.router.ts
import express, { Router } from "express";
import AboutController from "../controller/about.controller";
import { asynErrorHandle } from "../service/asynErrorHandle"; // wrap error

import AuthMiddleware from "../middleware/authMiddlewre";
import { upload } from "../service/multer";
const router: Router = express.Router();
// create and update if create xaina vanni chai create if create xa vanni update hunxa
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    upload.single("profileImage"),
    asynErrorHandle(AboutController.createAbout)
  )
  .get(asynErrorHandle(AboutController.getAbout));

router
  .route("/:id")
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(AboutController.deleteAbout)
  )
  .get(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(AboutController.singleAboutFetch)
  );

export default router;
