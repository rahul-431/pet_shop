import { connectDB } from "../connection";
import Blog from "../models/blog.model";

export async function createBlog({ author, image, title, text }: BlogRequest) {
  try {
    await connectDB();
    const blog = await Blog.create({ author, image, title, text });
    return blog as BlogResponse;
  } catch (error: any) {
    throw new Error(`Failed to create blog: ${error.message}`);
  }
}
export async function getBlogById(blogId: string) {
  try {
    await connectDB();
    const blog = await Blog.findById(blogId).populate("author");
    if (!blog) throw new Error("Blog not found");
    return blog as BlogResponse;
  } catch (error: any) {
    throw new Error(`Failed to fetch blog: ${error.message}`);
  }
}
export async function getAllBlogs() {
  try {
    await connectDB();
    const blogs: BlogResponse[] = await Blog.find()
      .populate("author")
      .sort({ createdAt: -1 });
    return blogs;
  } catch (error: any) {
    throw new Error(`Failed to fetch blogs: ${error.message}`);
  }
}
export async function updateBlog(
  blogId: string,
  updates: Partial<{ image: string; title: string; text: string }>
) {
  try {
    await connectDB();
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updates, {
      new: true,
    });
    if (!updatedBlog) throw new Error("Blog not found");
    return updatedBlog as BlogResponse;
  } catch (error: any) {
    throw new Error(`Failed to update blog: ${error.message}`);
  }
}
export async function deleteBlog(blogId: string) {
  try {
    await connectDB();
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) throw new Error("Blog not found");
    return deletedBlog;
  } catch (error: any) {
    throw new Error(`Failed to delete blog: ${error.message}`);
  }
}
export async function getBlogsByAuthor(authorId: string) {
  try {
    await connectDB();
    const blogs = await Blog.find({ author: authorId }).sort({ createdAt: -1 });
    return blogs as BlogResponse[];
  } catch (error: any) {
    throw new Error(`Failed to fetch blogs by author: ${error.message}`);
  }
}
