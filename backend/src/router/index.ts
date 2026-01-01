// router/index.ts
import { Router } from "express";

import aboutRouter from "./about.route";
import authRouter from "./auth.route";
import skillRouter from "./skill.route";
import serviceRouter from "./service.route";
import projectRouter from "./project.route";
import blogRouter from "./blog.route";
import contactRouter from "./contact.route";

const router = Router();

router.use("/api/about", aboutRouter);
router.use("/api/auth", authRouter);
router.use("/api/skill", skillRouter);
router.use("/api/services", serviceRouter);
router.use("/api/projects", projectRouter);
router.use("/api/blogs", blogRouter);
router.use("/api/contact-us", contactRouter);
export default router;
