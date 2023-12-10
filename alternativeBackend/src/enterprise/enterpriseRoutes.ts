import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";
import { upload } from "../upload";

import { getAllEnterprise } from "./getAllEnterprise";
import { createEnterprise } from "./createEnterprise";
import { updateEnterprise } from "./updateEnterprise";
import { deleteEnterprise } from "./deleteEnterprise";
import { getEnterprise } from "./getEnterprise";

const router = Router();
export const enterpriseRoutes = router;

router.get("/", authMiddleware, async (req: AuthReq, res) => {
  const user = await getAllEnterprise();
  return res.json(user);
});

router.get("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const user = await getEnterprise(id);
  return res.json(user);
});

router.post("/", upload.single("picture"), async (req, res) => {
  const { filename } = req.file;
  const enterprise = await createEnterprise({ ...req.body, picture: filename });
  return res.status(201).json(enterprise);
});

router.patch("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const enterprise = await updateEnterprise(req.body, id);
  return res.status(201).json(enterprise);
});

router.delete("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const enterprise = await deleteEnterprise(id);
  return res.status(203).json(enterprise);
});
