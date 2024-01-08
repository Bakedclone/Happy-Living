// import { Rooms } from "../models/Rooms.js";

export const getAllRooms = async (req, res, next) => {
    const rooms = await Rooms.find();
    res.status(200).json({
        success: true,
        // Rooms,
    });
};

export const addrooms = async (req, res, next) => {
    



    res.status(200).json({
        success: true,
        // Rooms,
    });
};