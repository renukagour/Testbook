const { Cart } = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");
const Product = require("../models/product.model");


const createCart = async (user) => {
    try {
        const cart = new Cart({user });

        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error('Failed to create cart',error.message);
    }
}

const findUserCart = async (userId) => {
    console.log("in services ",userId);
    try {
        //find cart by userId
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            throw new Error('Cart not found for this user.');
        }
        //carteItems by cartId
        let cartItems = await CartItem.find({ cart: cart._id }).populate("product");

        cart.cartItems = cartItems;

        console.log("cart item is ", cart.cartItems);
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;
        for (let carteItem of cart.cartItems) {
            totalPrice += carteItem.price;
            totalDiscountedPrice += carteItem.discountedPrice;
            totalItem += carteItem.quantity;
        }

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discounte = totalPrice - totalDiscountedPrice;
        cart.totalDiscountedPrice=totalDiscountedPrice;
        return cart;

    } catch (error) {
        throw new Error(error.message);
    }
}

const addCartItem = async (userId, req) => {
    try {
        const cart = await Cart.findOne({ user: userId });
        const product = await Product.findById(req.productId);

        const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });

        if (!isPresent) {
            const cartItem = new CartItem({
                cart: cart._id,
                product: product._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice,
            });
            const createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem);
            await cart.save();
            return createdCartItem;
        }
        return isPresent;
    }
    catch (err) {
        throw new Error(err.message);
    }

}

module.exports = { createCart, findUserCart, addCartItem };