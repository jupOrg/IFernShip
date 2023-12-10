import { expressjwt } from "express-jwt";
import { JWT_SECRET } from "../env";

export const authMiddleware = expressjwt({
  secret: JWT_SECRET,
  algorithms: ["HS256"],
});
