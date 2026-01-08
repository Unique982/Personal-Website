import express, { Router } from "express";
import BlogController from "../controller/blog.controller";
import AuthMiddleware from "../middleware/authMiddlewre";
import { asynErrorHandle } from "../service/asynErrorHandle";
import { upload } from "../service/multer";
const router: Router = express.Router();
// create blog
router
  .route("/")
  .post(
    AuthMiddleware.isUserLoggeedIn,
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "subImage", maxCount: 5 },
    ]),
    asynErrorHandle(BlogController.createBlogs)
  )
  // get blog
  .get(asynErrorHandle(BlogController.fetchBlogs));
// update blog
router
  .route("/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "subImage", maxCount: 5 },
    ]),
    asynErrorHandle(BlogController.updateBlogs)
  )
  // delet blog
  .delete(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(BlogController.deleteBlogs)
  )
  // singel get blog
  .get(asynErrorHandle(BlogController.fetchBlogDetails));
router
  .route("/status/:id")
  .patch(
    AuthMiddleware.isUserLoggeedIn,
    asynErrorHandle(BlogController.statusBlogs)
  );

export default router;
