import { config } from "dotenv";
config();

export const { JWT_SECRET } = process.env;

if (!JWT_SECRET) throw new Error("Missing JWT_SECRET env variable");
