import express from "express";
import { addrooms, getAllRooms } from "../controllers/roomController.js";

const router = express.Router();

router.route("/rooms").get(getAllRooms);
router.route("/addrooms").post(addrooms)

export default router;