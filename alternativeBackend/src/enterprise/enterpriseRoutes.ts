import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";

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

router.post("/", authMiddleware, async (req: AuthReq, res) => {
  const enterprise = await createEnterprise(req.body);
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
  return res.status(201).json(enterprise);
});
