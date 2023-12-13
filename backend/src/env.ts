import { config } from "dotenv";
config();

export const { JWT_SECRET, HOST_APPLICATION } = process.env;

if (!JWT_SECRET) throw new Error("Missing JWT_SECRET env variable");
if (!HOST_APPLICATION) throw new Error("Missing HOST_APPLICATION env variable");
