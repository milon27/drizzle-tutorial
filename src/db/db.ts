import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { envConfig } from "../config/config";

import * as allUser from "./schema/user.schema";
import * as allCategory from "./schema/category.schema";
import * as allBlog from "./schema/blog.schema";
import * as allRole from "./schema/role.schema";
import * as allBlog2Category from "./schema/blog-to-category.schema";

const pool = mysql.createPool({
  uri: envConfig.DATABASE_URL,
});

export const db = drizzle(pool, {
  logger: false,
  schema: {
    ...allUser,
    ...allCategory,
    ...allBlog,
    ...allRole,
    ...allBlog2Category,
  },
});
