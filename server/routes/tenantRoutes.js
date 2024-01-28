import express from "express";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import { addTenant, countDeposite, deleteTenant, updateTenant } from "../controllers/tenantController.js";

const router = express.Router();

// add Tenant
router.route("/admin/addtenant").post(isAuthenticated, authorizeAdmin, addTenant);

// update Tenant
router.route("/admin/updatetenant").post(isAuthenticated, authorizeAdmin, updateTenant);

// Delete Tenant
router.route("/admin/deletetenant").delete(isAuthenticated, authorizeAdmin, deleteTenant);

// Count Deposite
router.route("/countdeposite").put(isAuthenticated, countDeposite);

export default router;