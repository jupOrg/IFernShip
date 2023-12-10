import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";
import { getUser } from "./getUser";

const router = Router();
export const userRoutes = router;

router.get("/me", authMiddleware, async (req: AuthReq, res) => {
  const userId = req.auth;
  const user = await getUser(userId);
  return res.json(user);
});
