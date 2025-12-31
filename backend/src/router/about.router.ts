import express, { Router } from "express";
import AboutController from "../controller/about.controller";
const router: Router = express.Router();

router.route("/api/about").post(AboutController.createAbout);

export default router;
