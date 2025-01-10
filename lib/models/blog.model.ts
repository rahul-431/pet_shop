import { model, models, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image: String,
    title: String,
    text: String,
  },
  { timestamps: true }
);
const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
