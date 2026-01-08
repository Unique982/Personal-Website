import express, { Router } from "express";
import AuthController from "../controller/auth.controller";
const router: Router = express.Router();

// login
router.route("/login").post(AuthController.isLogin);
// logout
// router.route("/logout").post(AuthController.logout);
// forget password
router.route("/forget-password").post(AuthController.forgetPassword);
// Otpverify
router.route("/verfiy-password").post(AuthController.otpVerify);
// new-password
router.route("/new-password").post(AuthController.newPassword);
// profile
router.route("/profile/:id").patch(AuthController.updateProfile);
// password update
router.route("/password/:id").patch(AuthController.updateProfile);

export default router;
