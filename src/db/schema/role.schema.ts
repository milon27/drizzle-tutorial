import { InferModel, relations, sql } from "drizzle-orm";
import { datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { UserSchema } from "./user.schema";

export const RoleSchema = mysqlTable("roles", {
  slug: varchar("slug", { length: 25 }).primaryKey(),
  title: varchar("title", { length: 50 }).notNull(),
  createdAt: datetime("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type IRole = InferModel<typeof RoleSchema, "select">;
export type ICreateRole = InferModel<typeof RoleSchema, "insert">;

export const RoleRelation = relations(RoleSchema, ({ one, many }) => {
  return {
    users: many(UserSchema),
  };
});
