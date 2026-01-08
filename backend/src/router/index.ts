// router/index.ts
import express, { Router } from "express";

/**
 * All Router file import here
 */
import authRouter from "./auth.route";
import aboutRouter from "./about.route";
import projectRouter from "./project.route";
import contactRouter from "./contact.route";
import skillRouter from "./skill.route";
import servicesRouter from "./service.route";
import blogRouter from "./blog.route";

const router: Router = express.Router();
/**
 * all router api
 */
router.use("/auth", authRouter);
router.use("/about", aboutRouter);
router.use("/projects", projectRouter);
router.use("/contact", contactRouter);
router.use("/skills", skillRouter);
router.use("/services", servicesRouter);
router.use("/blogs", blogRouter);
export default router;
