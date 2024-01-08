import mongoose from "mongoose";

const schema = new mongoose.Schema({

    Tenantid:{
        type:String,
        required:[true, "Please enter Tenant ID"]
    },
    Userid:{
        type:String,
        required:[true, "Please enter User ID"]
    },
    propertyid:{
        type:String,
        required:[true, "Please enter Property ID"]
    },
    startingdate:{
        type: Date,
        required:[true, "Please enter Starting Date"]
    },
    endingdate:{
        type: Date,
        required:[true, "Please enter Starting Date"]
    },
    status:{
        type:String,
    },
    
})