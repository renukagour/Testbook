const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    //products saved in arrays
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            cartQuantity: {
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: {
        type: Number,   
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    shippingAddressGoogleMap: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: [true, "Contact Number is Required"],
        validate:{
            validator: function(v){
                // return /^\d{10}$/.test(v);
                return /^(\+\d{1,3})?(\d{7,15})$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        }
    },
    status: {
        type: String,
        enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
        default: "Pending"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
   
});
const Order = mongoose.model("Order", orderSchema);
module.exports = Order