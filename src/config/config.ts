import dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  DATABASE_URL: process.env.DATABASE_URL,
};
