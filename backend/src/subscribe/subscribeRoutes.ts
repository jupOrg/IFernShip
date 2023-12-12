import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";

import { createSubscribe } from "./createSubscribe";
import { getAllSubscribe } from "./getAllSubscribe";
import { updateSubscribe } from "./updateSubscribe";
import { deleteSubscribe } from "./deleteSubscribe";
import { getSubscribe } from "./getSubscribe";

const router = Router();
export const subscribeRoutes = router;

router.get("/", authMiddleware, async (req: AuthReq, res) => {
  const subscribe = await getAllSubscribe();
  return res.json(subscribe);
});

router.get("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const subscribe = await getSubscribe(id);
  return res.json(subscribe);
});

router.post("/", authMiddleware, async (req: AuthReq, res) => {
  const subscribe = await createSubscribe({...req.body});
  return res.status(201).json(subscribe);
});

router.patch("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const subscribe = await updateSubscribe(req.body, id);
  return res.status(201).json(subscribe);
});

router.delete("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const subscribe = await deleteSubscribe(id);
  return res.status(204).json(subscribe);
});
