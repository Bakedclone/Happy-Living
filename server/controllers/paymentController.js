import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Users } from "../models/Users.js";
import { Payment } from "../models/Payment.js";
import ErrorHandler from "../utils/errorHandler.js";
import { instance } from "../server.js";

export const buySubscription = catchAsyncError(async (req, res, next)=>{
    const user = await Users.findById(req.user._id);

    if(user.type === "admin")
        return next(new ErrorHandler("Admin can't buy subscription", 400));

    const plan_id = process.env.PLAN_ID;

    const subscription = await instance.subscriptions.create({
        plan_id,
        customer_notify: 1,
        total_count: 6,
    });

    user.subscription.id = subscription.id;
    user.subscription.status = subscription.stauts;

    await user.save();

    res.status(201).json({
        success: true,
        subscriptionId: subscription.id,
    });
});

export const paymentVerification = catchAsyncError(async (req, res, next)=>{
    const {razorpay_signature, razorpay_payment_id, razorpay_subscription_id} = req.body;
    console.log(razorpay_signature, razorpay_payment_id, razorpay_subscription_id);
    const user = await Users.findById(req.user._id);
    
    const subscribe_id = user.subscription.id;
    const generated_signature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(razorpay_payment_id + "|" + subscribe_id, "utf-8")
        .digest("hex");

    const isAuthentic = generated_signature === razorpay_signature;

    if(!isAuthentic)
        return res.redirect(`${process.env.FRONTEND_URL}/paymentfail`);

    await Payment.create({
        razorpay_payment_id, 
        razorpay_signature,
        razorpay_subscription_id,
    });

    user.subscription.status = "active";

    await user.save();

    res.redirect(`${process.env.FRONTEND_URL}/paymentsuccess?reference=${razorpay_payment_id}`);
});

export const getRazorPayKey = catchAsyncError((req, res, next)=>{
    res.status(200).json({
        success: true,
        key: process.env.RAZORPAY_API_KEY,
    })
})

export const cancelSubscription = catchAsyncError(async(req, res, next)=>{

    const user = await Users.findById(req.user._id);

    const subscriptionId = user.subscription.id;

    let refund = false;

    await instance.subscriptions.cancel(subscriptionId);

    const payment = await Payment.findOne({
        razorpay_subscription_id: subscriptionId,
    });

    const gap = Date.now() - payment.createdAt;

    const refundTime = 7 * 24 * 60 * 60 * 1000;

    if(refundTime > gap) {
        refund = true;
        await instance.payments.refund(payment.razorpay_payment_id);
    }
    
    await payment.remove();
    user.subscription.id = undefined;
    user.subscription.status = undefined;
    await user.save();
    
    res.status(200).json({
        success: true,
        message: refund ? "Your Subsciption is cancelled and refund will received within 7 days." 
        : "Your Subsciption is cancelled. No refund will provided as subscription is cancelled after 7 days.",
    })
});

export const payNow = catchAsyncError(async(req, res, next)=>{

    const options = {
        amount: Number(req.body.amount)*100,
        currency: "INR",
    };

    const order = await instance.orders.create(options);

    // console.log(order);
    res.status(200).json({
        success: true,
        order
    })
})