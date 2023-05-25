import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  uri: "mysql://root:myPassWord@localhost:3308/test",
});

export const db = drizzle(pool);
