
const Cart = require("../model/cart.model");

const addToCart = async (req, res) => {
    try {
        const { userId, productId, cartQuantity } = req.body

        let cart = await Cart.findOne({ userId, productId })

        if (cart) {
            cart.quantity += parseInt(cartQuantity)
        } else {
            cart = new Cart({ userId, productId, cartQuantity })
        }

        const savedCart = await cart.save();
        res.status(201).json(savedCart);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const getCartByUserID = async (req, res) => {
    try {
        const userId = req.params.userId
        const cart = await Cart.find({ userId }).populate("productId")
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//remove one cart item

const deleCartByID = async (req, res) => {
    try {
        const cartId = req.params.id
        const cart = await Cart.findByIdAndDelete(cartId)
        if (!cart) {
            res.status(404).json({ message: "cart not found" })

        }
        res.status(201).json({ message: "cart deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteAllCartsByUserId=async(req,res)=>{
    try {
        const userId=req.params.id
        const result=await Cart.deleteMany({userId})
        res.status(201).json({message:`${result.deletedCount} carts deleted successfully`})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    addToCart,
    getCartByUserID,
    deleCartByID,
    deleteAllCartsByUserId
}