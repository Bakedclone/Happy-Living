import mongoose from "mongoose";

const schema = new mongoose.Schema({

    // Propertyid: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "PG",
    // },
    RoomID:{
        type:String,
        required:[true, "Please enter your Room No."],
        maxLength:[6, "Room No. must be atmost 6 character"]
    },
    Propertyid:{
        type:String,
        required:[true, "Please enter your Room-ID"]
    },
    SharingCapacity:{
        type:Number,
        required:[true, "Please enter your Room No."],
        maxLength:[2, "Capacity must be atmost 2 character"]
    },
    occupied:{
        type:Number,
        required:[true, "Please enter your Room No."],
        maxLength:[2, "Occupied length must be atmost 2 character"]
    },
    facilities: [
        {
            type : String,
        }
    ],
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})