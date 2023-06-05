import { InferModel, sql } from "drizzle-orm";
import { datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const CategorySchema = mysqlTable("categories", {
  slug: varchar("slug", { length: 50 }).primaryKey(),
  title: varchar("title", { length: 50 }).notNull(),
  thumbnail: varchar("thumbnail", { length: 255 })
    .notNull()
    .default("https://images.unsplash.com/photo-1685728399140-5650bbcfc015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1060&q=80"),
  createdAt: datetime("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type ICategory = InferModel<typeof CategorySchema, "select">;
export type ICreateCategory = InferModel<typeof CategorySchema, "insert">;
