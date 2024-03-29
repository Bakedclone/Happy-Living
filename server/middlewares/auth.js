import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import { Users } from "../models/Users.js";

export const isAuthenticated = catchAsyncError(async (req, res, next)=> {
    const { token } = req.cookies;
    if(!token) return next(new ErrorHandler("Not Logged In", 401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await Users.findById(decoded._id);

    next();
});

export const authorizeAdmin = (req, res, next) => {
    if(req.user.type !== "admin")
        return next(new ErrorHandler(`${req.user.type} is not allowed to access this resource.`,403));

    next();
}

export const authorizeSubscribers = (req, res, next)=> {
    if(req.user.subscription.status !== "active" && req.user.type !== "admin")
        return next(new ErrorHandler(`Only Subscriber can access this resource`, 403))
    next();
}