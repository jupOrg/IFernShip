import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";
import { upload } from "../upload";

import { getAllEnterprise } from "./getAllEnterprise";
import { createEnterprise } from "./createEnterprise";
import { updateEnterprise } from "./updateEnterprise";
import { deleteEnterprise } from "./deleteEnterprise";
import { getEnterprise } from "./getEnterprise";
import { HOST_APPLICATION } from "../env";

const router = Router();
export const enterpriseRoutes = router;

router.get("/", authMiddleware, async (req: AuthReq, res) => {
  const { q } = req.query;
  const user = await getAllEnterprise({ name: q as string });
  return res.json(user);
});

router.get("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const user = await getEnterprise(id);
  return res.json(user);
});

router.post("/", authMiddleware, upload.single("picture"), async (req, res) => {
  const { filename } = req.file;
  const picture = `${HOST_APPLICATION}/images/${filename}`;
  const enterprise = await createEnterprise({ ...req.body, picture });
  return res.status(201).json(enterprise);
});

router.patch("/:id", authMiddleware, upload.single("picture"), async (req: AuthReq, res) => {
  const { id } = req.params;
  const { filename } = req?.file ? req.file : "";
  const picture = filename ? `${HOST_APPLICATION}/images/${filename}`: null;
  const data = picture ? {...req.body, picture} : req.body;
  const enterprise = await updateEnterprise(data, id);
  return res.status(203).json(enterprise);
});

router.delete("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const enterprise = await deleteEnterprise(id);
  return res.status(204).json(enterprise);
});
