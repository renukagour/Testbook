const mongoose = require("mongoose");

const cartSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    cartQuantity:{
        type:Number,
        required:true,
        default:1
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const cart=mongoose.model("Cart",cartSchema);
module.exports=cart