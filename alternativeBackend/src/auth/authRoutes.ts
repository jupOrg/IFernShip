import { Router } from "express";
import { signUp } from "./signUp";
import { logIn } from "./logIn";

const router = Router();
export const authRoutes = router;

router.post("/sign-up", async (req, res) => {
  const { name, email, password, role } = req.body;
  const result = await signUp({ name, email, password, role });
  return res.status(201).json(result);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await logIn({ email, password });
  return res.status(201).json(result);
});