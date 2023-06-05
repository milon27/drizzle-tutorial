import { InferModel, relations, sql } from "drizzle-orm";
import { boolean, datetime, decimal, index, int, mysqlTable, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { UserSchema } from "./user.schema";
import { BlogToCategorySchema } from "./blog-to-category.schema";

export const BlogSchema = mysqlTable(
  "blogs",
  {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull(),
    content: varchar("content", { length: 2000 }).notNull(),
    thumbnail: varchar("thumbnail", { length: 255 })
      .notNull()
      .default("https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80"),
    published: boolean("published").default(true).notNull(),
    views: int("views").default(0).notNull(),
    rating: decimal("rating", { precision: 2, scale: 1 }).default("0.0").notNull(), // 2.5, 3.5,5.0
    createdAt: datetime("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: datetime("updated_at")
      .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
      .notNull(),
    authorId: varchar("author_id", { length: 50 })
      .notNull()
      .references(() => UserSchema.id),
  },
  (blogSchema) => {
    return {
      slug_unique_idx: uniqueIndex("slug_unique_idx").on(blogSchema.slug),
      published_idx: index("published_idx").on(blogSchema.published),
    };
  }
);

export type IBlog = InferModel<typeof BlogSchema, "select">;
export type ICreateBlog = InferModel<typeof BlogSchema, "insert">;

// blog relation ship
export const BlogRelation = relations(BlogSchema, ({ one, many }) => {
  return {
    author: one(UserSchema, { fields: [BlogSchema.authorId], references: [UserSchema.id] }),
    blogToCategory: many(BlogToCategorySchema),
  };
});
