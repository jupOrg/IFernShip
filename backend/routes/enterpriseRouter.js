import { Router } from "express";
import upload from "../config/upload.js";
import enterpriseController from "../controllers/enterpriseController.js";
import { verifyTokenAuthentication } from "../middlewares/authentication.js";

const router = Router();
export const enterpriseRouter = router;

router.get(
  "/",
  verifyTokenAuthentication,
  enterpriseController.listEnterprises
);
router.get(
  "/:id",
  verifyTokenAuthentication,
  enterpriseController.findEnterprise
);
router.post(
  "/",
  verifyTokenAuthentication,
  upload.single("image"),
  enterpriseController.saveEnterprise
);
router.delete(
  "/:id",
  verifyTokenAuthentication,
  enterpriseController.deleteEnterprise
);
router.put(
  "/:id",
  verifyTokenAuthentication,
  upload.single("image"),
  enterpriseController.updateEnterprise
);
