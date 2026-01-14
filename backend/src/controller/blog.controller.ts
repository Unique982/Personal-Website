import { Request, Response } from "express";
import {
  blogInputSchema,
  createBlogSchema,
  updateBlogInputSchema,
  updateBlogSchema,
} from "../schema/blog.schema";
import Blog from "../model/blog.model";
class BlogController {
  // create blogs
  static async createBlogs(req: Request, res: Response) {
    const validatedData: blogInputSchema = createBlogSchema.parse(req.body);
    const { title, slug, description, longDescription, category, tag, status } =
      validatedData;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const coverImage = req.file?.path;
    const subImage = (files["subImage"] || []).map((file) => file.path);
    if (!coverImage)
      return res
        .status(400)
        .json({ message: "Cover image image is required 🤷‍♂️" });
    const exists = await Blog.findOne({
      $or: [{ slug }, { title }],
    });
    if (exists)
      return res
        .status(409)
        .json({ message: "This blog  name already existing🤷‍♂️" });
    await Blog.create({
      title,
      slug,
      description,
      longDescription,
      category,
      tag,
      status,
      coverImage,
      subImage,
    });
    res.status(200).json({ message: "Blog create successful😀" });
  }
  // fetch all blog
  static async fetchBlogs(req: Request, res: Response) {
    const blogList = await Blog.find();
    res.status(200).json({ message: "Blogs list fetch😀", data: blogList });
  }
  // Update Blogs
  static async updateBlogs(req: Request, res: Response) {
    const { id } = req.params;
    const validatedData: updateBlogInputSchema = updateBlogSchema.parse(
      req.body
    );
    const { title, slug, description, longDescription, category, tag, status } =
      validatedData;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const coverImage = files?.["coverImage"]?.[0]?.path;
    const subImage = (files?.["subImage"] || []).map((file) => file.path);
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog id not found🤷‍♂️" });
    }
    // merger only provide filed
    // target -> object lai update garna kam lag xa
    // project -> objetc ko values target set garxa
    Object.assign(blog, validatedData);
    await blog.save();
    res.status(200).json({ message: "Blog update successful😀" });
  }
  // Delete Blogs
  static async deleteBlogs(req: Request, res: Response) {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) return res.status(404).json({ message: "Blog id not found🤷‍♂️" });
    res.status(200).json({ message: "Blog delete successful😀" });
  }
  // status change draft and publich
  static async statusBlogs(req: Request, res: Response) {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(400).json({ message: "Blog id not found🤷‍♂️" });

    // already read xaina vani only chnage hunxa
    blog.status = blog.status === "publich" ? "draft" : "publich";
    await blog.save();
    res
      .status(200)
      .json({ message: `Blog status updated to "${blog.status}" 😀` });
  }

  // fetch Blogs Details
  static async fetchBlogDetails(req: Request, res: Response) {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog id not found🤷‍♂️" });
    res.status(200).json({ message: "Blog delete successful😀", data: blog });
  }
}

export default BlogController;
