import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Property } from "../models/Property.js";
import ErrorHandler from "../utils/errorHandler.js";

export const addproperty = async (req, res, next) => {

    const { _id, landlord_id, name, city, address, area } = req.body; 

    if(!_id || !landlord_id || !name || !city || !address)
        return next(new ErrorHandler("Please add all fields", 400)); // Custom Error Handler
    
    // const file = req.file; // this will blog file so we have to create it's uri
    try {
        await Property.create({
            _id,
            landlord_id,
            name,
            city,
            address,
            area,
            images : [
                {
                    public_id: "temp",
                    url: "temp",
                },
            ]
        })
        res.status(201).json({
            success: true,
            message: "Property added Successfully. You can add rooms of this property",
        });
    }
    catch(error) {
        if(error.code == 11000)
            next(new ErrorHandler("Enter Unique ID", 400));
    }

};