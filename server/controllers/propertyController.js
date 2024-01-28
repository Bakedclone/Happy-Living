import express from "express";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Property } from "../models/Property.js";
import ErrorHandler from "../utils/errorHandler.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";

export const addProperty = async(req, res, next) => {

    const { _id, landlord_id, name, city, address, area } = req.body; 

    if(!_id || !landlord_id || !name || !city || !address)
        return next(new ErrorHandler("Please add all fields", 400)); // Custom Error Handler

    const files = req.files;

    const images = [];

    // Traverse through each file and upload to Cloudinary
    for (let index = 0; index < files.length; index++) {
        const file = files[index];

        // Convert file to data URI
        const dataUri = getDataUri(file);

        // Upload to Cloudinary
        const mycloud = await cloudinary.v2.uploader.upload(dataUri.content);

        // Store image details in the array
        const img = {
            public_id: mycloud.public_id,
            url: mycloud.secure_url,
        };

        // Push img into images array
        images.push(img);
    }

    try {
        await Property.create({
            _id,
            landlord_id,
            name,
            city,
            address,
            area,
            images
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