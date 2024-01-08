import express from "express";
import { addproperty } from "../controllers/propertyController.js";

const router = express.Router();

router.route("/addproperty").post(addproperty)

export default router;