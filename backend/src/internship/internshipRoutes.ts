import { Router } from "express";
import { authMiddleware } from "../auth/authMIddleware";
import { AuthReq } from "../auth/authReq";

import { createInternship } from "./createInternship";
import { getAllInternship } from "./getAllInternship";
import { updateInternship } from "./updateInternship";
import { deleteInternship } from "./deleteInternship";
import { getInternship } from "./getInternship";

const router = Router();
export const internshipRoutes = router;

router.get("/", authMiddleware, async (req: AuthReq, res) => {
  const internship = await getAllInternship();
  return res.json(internship);
});

router.get("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const internship = await getInternship(id);
  return res.json(internship);
});

router.post("/", authMiddleware, async (req: AuthReq, res) => {
  const internship = await createInternship({
    ...req.body,
    isActive: false,
  });
  return res.status(201).json(internship);
});

router.patch("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const internship = await updateInternship(req.body, id);
  return res.status(201).json(internship);
});

router.delete("/:id", authMiddleware, async (req: AuthReq, res) => {
  const { id } = req.params;
  const internship = await deleteInternship(id);
  return res.status(203).json(internship);
})