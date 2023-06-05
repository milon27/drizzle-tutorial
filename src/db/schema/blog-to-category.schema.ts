import { InferModel, relations } from "drizzle-orm";
import { int, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { BlogSchema } from "./blog.schema";
import { CategorySchema } from "./category.schema";

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

export const BlogToCategoryRelation = relations(BlogToCategorySchema, ({ one, many }) => {
  return {
    blog: one(BlogSchema, { fields: [BlogToCategorySchema.blogId], references: [BlogSchema.id] }),
    category: one(CategorySchema, { fields: [BlogToCategorySchema.categorySlug], references: [CategorySchema.slug] }),
  };
});
