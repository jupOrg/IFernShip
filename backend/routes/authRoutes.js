import { Router } from "express";
import userController from "../controllers/userController.js";

const router = Router();
export const authRouter = router;

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", (req, res) => res.send("Rota a ser criada"));
