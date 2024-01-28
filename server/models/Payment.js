import mongoose from "mongoose";

const schema = new mongoose.Schema({
    // razorpay_signature: {
    //     type: String,
    //     required: true,
    // }, razorpay_payment_id: {
    //     type: String,
    //     required: true,
    // }, razorpay_subscription_id: {
    //     type: String,
    //     required: true,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    TenantID:{
        type:String,
        required:[true, "Please enter Tenant ID"]
    },
    Amount:{
        type:Number,
        required:[true, "Please enter Amount"]
    },
    PaymentDate: {
        type: Date,
        default: Date.now,
    },
    PaymentMethod: {
        type: String,
    },
    RazorPayPaymentID:{
        type:String,
        required:[true, "Please enter Payment ID"]
    },
    RazorPaySignatureID:{
        type:String,
        required:[true, "Please enter Payment ID"]
    },

});

export const Payment = mongoose.model("Payment", schema, "Payment");