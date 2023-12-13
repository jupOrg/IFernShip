import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";
import { getUser } from "./getUser";
import { updateUser } from "./updateUser";
import { upload } from "../upload";
import { HOST_APPLICATION } from "../env";

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
    const { filename } = req.file;
    const picture = `${HOST_APPLICATION}/images/${filename}`;
    const user = await updateUser({ ...req.body, picture }, id);
    return res.status(203).json(user);
  },
);
