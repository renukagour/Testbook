const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service");

const updateCartItem = async (userId, cartItemId, cartItemData) => {
    try {
        const item = await findCartItemById(cartItemId);

        // if (!item) {
        //     throw new Error("Cart item not found", cartItemId);
        // }

        const user = await userService.findUserById(item.userId);

        if (!user) {
            throw new Error("User not found", userId);
        }

        //only logged email can update cart of own
        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price; //20*455
            item.discountedPrice = item.quantity * item.product.discountedPrice;
            // item.price = parseFloat((item.quantity * item.product.price).toFixed(2));
            // item.discountedPrice = parseFloat((item.quantity * item.product.discountedPrice).toFixed(2));

            const updatedCartItem = await item.save();
            return updatedCartItem;
        } else {
            throw new Error("you can't update this cart");
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

const removeCartItem = async (userId, cartItemId) => {
    // try {

    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);

    // console.log(user._id.toString(),"  ",cartItem.userId.toString());
    if (user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId);

    }
    else {
        throw new Error("you can't delete this cart or you can't remove another's item");
    }

    // } catch (error) {
    //     throw new Error(error.message);
    // }
}


const findCartItemById = async (cartItemId) => {

    try {
        const cartItem = await CartItem.findById(cartItemId).populate('product');
        // const cartItem = await findCartItemById(cartItemId);
        if (cartItem)
            return cartItem;
        else
            throw new Error("Cart item not found with id ", cartItemId);

    } catch (error) {
        throw new Error(error.message);
    }

}


module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}