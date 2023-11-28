import { Router } from "express";
import upload from "../config/upload.js";
import userController from "../controllers/userController.js";

const router = Router();
export const userRouter = router;

router.get("/", userController.listUsers);
router.get("/:id", userController.findUser);
router.delete("/:id", userController.deleteUser);
router.put("/edit/:id", upload.single("image"), userController.edit);
