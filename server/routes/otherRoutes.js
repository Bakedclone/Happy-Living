import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { dashboardData, getDashboardStats } from "../controllers/otherController.js";
// import { tenantRequest } from "../controllers/otherController.js";

const router = express.Router();

// Buy Subscription
// router.route("/stayrequest").get(isAuthenticated,tenantRequest);

router.route("/dashdata").get(isAuthenticated, authorizeAdmin, dashboardData);

router.route("/dashstats").get(isAuthenticated, authorizeAdmin ,getDashboardStats);

export default router;