import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Users } from "../models/Users.js";
import ErrorHandler from "../utils/errorHandler.js"
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto";

export const register = catchAsyncError(async(req, res, next)=> {

    const { _id, email, password } = req.body;

    // const file = req.file;

    if(!_id || !email || !password) 
        return next(new ErrorHandler("Enter all fields", 400));

    let user;
    // let user = await Users.findOne({ email });
    // // user = await Users.findOne({ _id });

    // if (user) return next(new ErrorHandler("User already exist", 409));

    // Upload file on cloud

    user = await Users.create({
        _id,
        email,
        password
    })

    sendToken(res, user, "Registered Successfully.", 201);
});

export const login = catchAsyncError(async(req, res, next)=> {

    const { email, password } = req.body;

    // const file = req.file;

    if(!email || !password) 
        return next(new ErrorHandler("Please enter Email and Password", 400));

    const user = await Users.findOne({ email }).select("+password");
    // user = await Users.findOne({ _id });

    if (!user) return next(new ErrorHandler("User does't exist", 401));

    const isMatch = await user.comparePassword(password);

    if (!isMatch)
        return next(new ErrorHandler("Invalid Email or Password",401));

    sendToken(res, user, `Welcome Back, ${user._id}`, 201);
});

export const logout = catchAsyncError(async (req, res, next)=> {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "Logout Successfully."
    })
});

export const getMyProfile = catchAsyncError(async (req, res, next)=> {
    
    const user = await Users.findById(req.user._id);
    
    res.status(200).json({
        success: true,
        user,
    });
})

export const changePassword = catchAsyncError(async (req, res, next)=> {
    
    const { oldPassword, newPassword } = req.body;

    if( !oldPassword || !newPassword )
        return next(new ErrorHandler("Please enter all fields", 400));

    const user = await Users.findById(req.user._id).select("+password");
    
    const isMatch = await user.comparePassword(oldPassword);

    if(!isMatch) return next(new ErrorHandler("Incorrect Old Password", 400));

    user.password = newPassword;

    await user.save();

    res.status(200).json({
        success: true,
        message: "Password Changed Successfully."
    });
})

export const updateProfile = catchAsyncError(async (req, res, next)=> {
    
    const { name, email, phoneNumber } = req.body;

    const user = await Users.findById(req.user._id);
    
    if(name) user.name = name;
    if(email) user.email = email;
    if(phoneNumber) user.phoneNumber = phoneNumber;

    await user.save();

    res.status(200).json({
        success: true,
        message: "Update Profile Successfully."
    });
})

export const updateProfilePicture = catchAsyncError(async (req, res, next)=> {
    
    // Pending

    res.status(200).json({
        success: true,
        message: "Pending"
    });
})


export const forgetPassword = catchAsyncError(async (req, res, next)=> {
    
    const { email } = req.body;

    const user = await Users.findOne({ email });

    if(!user) return next(new ErrorHandler("Email doesn't exist", 400));

    const resetToken = await user.getResetToken();
    
    await user.save();
    const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
    const message = `Click on the link to reset your password. ${url}. If you have not request then please ignore.`;

    await sendEmail(user.email, "HappyLiving Reset Password", message);

    res.status(200).json({
        success: true,
        message: `Reset Token has been sent to ${user.email}`,
    });
})

export const resetPassword = catchAsyncError(async (req, res, next)=> {
    
    const { token } = req.params;

    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await Users.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now(),
        }
    });

    if(!user) return next(new ErrorHandler("Token is invalid or has been expired.", 401));

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({
        success: true,
        message: `Password changed Successfully.`,
    });
})