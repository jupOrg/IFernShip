import { config } from "dotenv";
config();

export const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_HOST } = process.env;
