import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { tenantRequest } from "../controllers/otherController.js";

const router = express.Router();

// Buy Subscription
router.route("/stayrequest").get(isAuthenticated,tenantRequest);

export default router;