const { Address } = require("../models/address.model");
const Order = require("../models/order.model");
const { OrderItem } = require("../models/orderItems");
const cartService = require("../services/cart.service");

const findOrderById = async (orderId) => {
    try {
        const order = await Order.findById(orderId)
            .populate("user")
            .populate({ path: "orderItems", populate: { path: "product" } })
            .populate("shippingAddress"); //explanation below
        if (!order) {
            throw new Error("Order not found");
        }
        return order;
    } catch (error) {
        throw new Error(error.message);
    }
};

const createOrder = async (user, shippAddress) => {
    // console.log("in create order service", user);
    // try {
        let address;
        // console.log("shipping address", shippAddress);
        //if address is already in cart 
        if (shippAddress._id) {
            console.log("shipping address id ",shippAddress._id);
            let existAddress = await Address.findById(shippAddress._id);
            address = existAddress;
            console.log("shipping address", address);
        } else {
            console.log("shipping address id  in else ",shippAddress._id);
            //create new address and save in user also
            address = new Address(shippAddress);
            address.user = user;
            await address.save();

            user.address.push(address);
            await user.save();
        }

        const cart = await  cartService.findUserCart(user._id);
        const orderItems = [];

        for (const item of cart.cartItems) {
            const orderItem = new OrderItem({
                price: item.price,
                product: item.product,
                quantity: item.quantity,
                size: item.size,
                userId: item.userId,
                discountedPrice: item.discountedPrice,
            });

            const createdOrderItem = await orderItem.save();
            orderItems.push(createdOrderItem);
        }

        // now can create order as we get all orderItems

        const createdOrder = new Order({
            user,
            orderItems,
            totalPrice: cart.totalPrice,
            totalDiscountedPrice: cart.totalDiscountedPrice,
            discounte: cart.discounte,
            totalItems: cart.totalItem,
            shippingAddress: address,
        });

        const saveOrder = await createdOrder.save();

        return saveOrder;
    // } catch (error) {
    //     throw new Error({error: error.message});
    // }
};

const placeOrder = async (orderId) => {
    try {
        const order = await findOrderById(orderId);
        order.orderStatus = "PLACED";
        order.paymentDetails.status = "COMPLETED";
        const placedOrder = await order.save();
        return placedOrder;
    } catch (error) {
        throw new Error("Failed to place order");
    }
};

const confirmedOrder = async (orderId) => {
    try {
        const order = await findOrderById(orderId);
        order.orderStatus = "CONFIRMED";

        const confirmOrder = await order.save();
        return confirmOrder;
    } catch (error) {
        throw new Error("Failed to place order");
    }
};

const shipOrder = async (orderId) => {
    try {
        const order = await findOrderById(orderId);
        order.orderStatus = "SHIPPED";

        const shippedOrder = await order.save();
        return shippedOrder;
    } catch (error) {
        throw new Error("Failed to place order");
    }
};

const deliverOrder = async (orderId) => {
    try {
        const order = await findOrderById(orderId);
        order.orderStatus = "DELIVERED";
        const deliveredOrder = await order.save();
        return deliveredOrder;
    } catch (error) {
        throw new Error("Failed to place order");
    }
};

const cancelledOrder = async (orderId) => {
    try {
        const order = await findOrderById(orderId);
        order.orderStatus = "CANCELLED";
        const canceledOrder = await order.save();
        return canceledOrder;
    } catch (error) {
        throw new Error("Failed to place order");
    }
};

const usersOrderHistory = async (userId) => {
    try {
        const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
            .populate({ path: "orderItems", populate: { path: "product" } })
            .lean(); // explanation below
        return orders;
    } catch (error) {
        throw new Error(error.message);
    }
};

// for admin to get all orders

const getAllOrders = async () => {
    try {
        const orders = await Order.find({})
            .populate({ path: "orderItems", populate: { path: "product" } })
            .lean();
        return orders;
    } catch (error) {
        throw new Error(error.message);
    }
};

const deleteOrder = async (orderId) => {
    try {
        const order = await findOrderById(orderId);
        await Order.findByIdAndDelete(order._id);

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    cancelledOrder,
    findOrderById,
    usersOrderHistory,
    getAllOrders,
    deleteOrder,
};

//   const order = await Order.findById(orderId)
//         .populate("user")
//         .populate({path:"orderItems",populate:{path:"product"}})
//         .populate("shippingAddress");

// The code is querying the Order collection for a specific order by its orderId.
// After finding the order, it populates related fields:
// user field with the associated user data.
// orderItems field with the associated order items, and further populates each item's product field with product data.
// shippingAddress field with the associated shipping address data.
// The result is a fully populated order object containing all relevant details, making it easier to work with in your application.

// const orders = await Order.find({user:userId,orderStatus:"PLACED"})
//        .populate({path:"orderItems",populate:{path:"product"}}).lean();

// lean():
// The lean() method is used to tell Mongoose to return plain JavaScript objects instead of Mongoose documents.
// By default, Mongoose returns documents with additional methods and properties attached, which can be useful for working with Mongoose models. However, these can add overhead.
// Using lean() improves performance, especially when you don't need the extra functionality provided by Mongoose documents (e.g., you just need to read the data and send it to a client or process it further).
// Lean Query: The lean() method converts the Mongoose documents into plain JavaScript objects, which is more efficient when you don't need Mongoose-specific methods.
