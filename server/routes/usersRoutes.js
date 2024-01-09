import express from "express";
import { changePassword, forgetPassword, getMyProfile, login, logout, register, resetPassword, updateProfile, updateProfilePicture, uploadAadharcard, uploadPanCard } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";
const router = express.Router();

// To register new user
router.route("/register").post(singleUpload, register);

// Login
router.route("/login").post(login);

// Logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAuthenticated ,getMyProfile);

// ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);

// UpdateProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// UpdateProfilePicture
router.route("/updateprofilepicture").put(isAuthenticated, singleUpload, updateProfilePicture);

// UploadAadharCard
router.route("/uploadaadharcard").put(isAuthenticated, singleUpload, uploadAadharcard);

// UploadPanCard
router.route("/uploadpancard").put(isAuthenticated, singleUpload, uploadPanCard);

// ForgetPassword
router.route("/forgetpassword").post(forgetPassword);

// ResetPassword
router.route("/resetpassword/:token").put(resetPassword);


export default router;