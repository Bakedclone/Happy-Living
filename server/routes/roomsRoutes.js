import express from "express";
import { addRooms, getAvaiableRooms,removeRoom, updateRoom } from "../controllers/roomController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Add Rooms
router.route("/addrooms").post(isAuthenticated, authorizeAdmin, addRooms)

// Remove Room
router.route("/removeroom").delete(isAuthenticated, authorizeAdmin, removeRoom);

//  Update Room 
router.route("/updateroom").put(isAuthenticated, authorizeAdmin, updateRoom);

// Get Available Rooms
router.route("/availablerooms").post(isAuthenticated, authorizeAdmin, getAvaiableRooms);

export default router;