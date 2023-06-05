import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { envConfig } from "../config/config";

const pool = mysql.createPool({
  uri: envConfig.DATABASE_URL,
});

export const db = drizzle(pool);
