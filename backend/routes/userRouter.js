import { Router } from "express";
import upload from "../config/upload.js";
import userController from "../controllers/userController.js";

const router = Router();
export const userRouter = router;

router.get("/", userController.listUsers);
router.get("/:id", userController.findUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/edit/:id", upload.single("image"), userController.edit);
router.delete("/", userController.deleteUser);
