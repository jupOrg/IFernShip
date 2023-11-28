import { config } from "dotenv";
config();

export const { DATABASE_URL, TOKEN_SECRET } = process.env;
