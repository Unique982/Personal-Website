import express, { Router } from "express";
import BlogController from "../controller/blog.controller";
const router: Router = express.Router();
// create blog
router
  .route("/")
  .post(BlogController.createBlogs)
  // get blog
  .get(BlogController.fetchBlogs);
// update blog
router
  .route("/:id")
  .patch(BlogController.updateBlogs)
  // draf blog
  .patch(BlogController.darftBlogs)
  // publich blog
  .patch(BlogController.publichBlogs)
  // delet blog
  .delete(BlogController.deleteBlogs)
  // singel get blog
  .get(BlogController.fetchBlogDetails);

export default router;
