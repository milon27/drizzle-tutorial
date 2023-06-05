import { InferModel } from "drizzle-orm";
import { int, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";

export const BlogToCategorySchema = mysqlTable(
  "blog_to_category",
  {
    blogId: int("blog_id").notNull(),
    categorySlug: int("category_slug").notNull(),
  },
  (blogToCategorySchema) => {
    return {
      pk: primaryKey(blogToCategorySchema.blogId, blogToCategorySchema.categorySlug),
    };
  }
);

export type IBlogToCategory = InferModel<typeof BlogToCategorySchema, "select">;
export type ICreateBlogToCategory = InferModel<typeof BlogToCategorySchema, "insert">;
