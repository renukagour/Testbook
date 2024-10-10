const cartItemService = require('../services/cartItem.service')

const updateCartItem = async (req, res) => {
    const user = await req.user;
    try {
        const userId = user._id
        const updatedCartItem = await cartItemService.updateCartItem(userId, req.params.id, req.body);
        return res.status(200).send(updatedCartItem)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

const removeCartItem = async (req, res) => {
    const user = await req.user;
    // console.log("cart item id ",req.params.id);
    try {
        const userId = user._id
        await cartItemService.removeCartItem(userId, req.params.id);
        return res.status(200).send({ message: "cart item removed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = {
    updateCartItem,
    removeCartItem,

}