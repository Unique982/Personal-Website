import express, { Router } from "express";
import AuthMiddleware, { Role } from "../middleware/authMiddlewre";
import { asynErrorHandle } from "../service/asynErrorHandle";
import DashboardOverview from "../controller/dashboard.controller";
const router: Router = express.Router();
router
  .route("/")
  .get(
    AuthMiddleware.isUserLoggeedIn,
    AuthMiddleware.restirectToUser(Role.Admin),
    asynErrorHandle(DashboardOverview.getDashboardData)
  );
export default router;
