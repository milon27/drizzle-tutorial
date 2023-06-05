import { InferModel, sql } from "drizzle-orm";
import { datetime, int, mysqlEnum, mysqlTable, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { RoleSchema } from "./role.schema";

export const UserSchema = mysqlTable(
  "users",
  {
    id: varchar("id", { length: 50 }).primaryKey(),
    fullName: varchar("full_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    age: int("age"),
    gender: mysqlEnum("gender", ["male", "female"]).notNull(),
    createdAt: datetime("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    roleSlug: varchar("role_slug", { length: 25 })
      .notNull()
      .references(() => {
        return RoleSchema.slug;
      }),
  },
  (userSchema) => {
    return {
      email_unique_idx: uniqueIndex("email_unique_idx").on(userSchema.email),
    };
  }
);

export type IUser = InferModel<typeof UserSchema, "select">;
export type ICreateUser = InferModel<typeof UserSchema, "insert">;
