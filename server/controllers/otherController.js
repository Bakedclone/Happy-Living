import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { sendEmail } from "../utils/sendEmail.js";


export const tenantRequest = catchAsyncError(async (req, res, next)=>{

    const { user_id, property_id, sharing, description, booking_period } = req.body;

    const to = process.env.MY_MAIL;
    const subject = "Request a stay from Happy-Living";
    const text = `User id : ${user_id} is requesting for stay in Property id : ${property_id} 
    with sharing capacity : ${sharing} for ${booking_period} months.` + description?`Description = ${description}`:"";


    await sendEmail(to, subject, text);

    res.status(200).json({
        success: true,
        message:  "Your message has been sent."
    })
})