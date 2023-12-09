import express from "express";
import userController from "../controllers/userController.js";
import { verifyTokenAuthentication } from "../middlewares/authentication.js";

const router = express.Router();

router.get("/me", verifyTokenAuthentication, userController.loggedUser);
router.patch("/:id", verifyTokenAuthentication, userController.edit);

export const userRouter = router;
