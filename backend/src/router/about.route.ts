// router/about.router.ts
import express, { Router } from "express";
import AboutController from "../controller/about.controller";
import { asynErrorHandle } from "../service/asynErrorHandle"; // wrap error

import AuthMiddleware from "../middleware/authMiddlewre";
const router: Router = express.Router();
// create and update if create xaina vanni chai create if create xa vanni update hunxa
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle,
    AboutController.createAbout
  ); // fetch about api
// .get();
// delete about
// router
//   .route("/:id")
//   .delete()
//   // single  view about
//   .get();

export default router;
