import mongoose from "mongoose";

const schema = new mongoose.Schema({

    Paymentid:{
        type:String,
        required:[true, "Please enter Payment ID"]
    },
    Tenantid:{
        type:String,
        required:[true, "Please enter Tenant ID"]
    },
    amount:{
        type:INT,
        required:[true, "Please enter Amount"]
    },
    PaymentDate: {
        type: Date,
        default: Date.now,
    },
    PaymentMethod: {
        type: String,
    },
    transcationId:{
        type:String,
        required:[true, "Please enter Transcation-ID"]
    },
    
})