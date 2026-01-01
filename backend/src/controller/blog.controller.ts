import { Request, Response } from "express";
class BlogController {
  // create blogs
  static async createBlogs(req: Request, res: Response) {}
  // fetch all blog
  static async fetchBlogs(req: Request, res: Response) {}
  // Update Blogs
  static async updateBlogs(req: Request, res: Response) {}
  // Delete Blogs
  static async deleteBlogs(req: Request, res: Response) {}
  // Draft Blogs
  static async darftBlogs(req: Request, res: Response) {}
  // publich Blogs
  static async publichBlogs(req: Request, res: Response) {}
  // fetch Blogs Details
  static async fetchBlogDetails(req: Request, res: Response) {}
}

export default BlogController;
