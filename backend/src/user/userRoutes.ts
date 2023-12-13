import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";
import { HOST_APPLICATION } from "../env";
import { upload } from "../upload";
import { getUser } from "./getUser";
import { updateUser } from "./updateUser";

const router = Router();
export const userRoutes = router;

router.get("/me", authMiddleware, async (req: AuthReq, res) => {
  const userId = req.auth;
  const user = await getUser(userId);
  return res.json(user);
});

router.patch(
  "/:id",
  authMiddleware,
  upload.single("picture"),
  async (req: AuthReq, res) => {
    const userId = req.auth;
    const { id } = req.params;
    if (userId !== id) {
      throw { status: 401, message: "Unauthorized access" };
    }
    const { filename } = req?.file ? req.file : "";
    const picture = filename ? `${HOST_APPLICATION}/images/${filename}` : null;
    const data = picture ? { ...req.body, picture } : req.body;
    const user = await updateUser(data, id);
    return res.status(203).json(user);
  },
);
