const Order = require("../model/order.model");

const createOrder = async (req, res) => {
    try {
        const { userId, products, totalAmount, shippingAddress, shippingAddressGoogleMap, contactNumber } = req.body;
        const order = new Order({
            userId, products, totalAmount, shippingAddress, shippingAddressGoogleMap, contactNumber
        });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

//for user
const getOrderByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.findById(userId).populate('product.productId').populate('userId');

        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// for Admin
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('product.productId').populate('userId');
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const updates = req.body;
        const options = { new: true };
        const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, options);

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" })
        }
        res.status(200).json(updatedOrder);


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id
        const order = await Order.findByIdAndDelete(orderId)
        if (!order) {
            return res.status(404).json({ message: "order not found" })
        }
        res.status(200).json({ success: true, message: "order deleted successfully", data: {} })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOrder, getOrderByUserId, getAllOrders, updateOrder, deleteOrder
};