const cartService=require('../services/cart.service')

const findUserCart= async (req,res)=>{
    const user=req.user;
    console.log("in controller ",user);
    try{
        const userId=user._id
        console.log("userId: " + userId);
        const cart= await cartService.findUserCart(userId)
        return res.status(200).send(cart)
    }catch(error){
        res.status(500).json({error:error.message})
    }
 
}

const AddItemToCart= async (req,res)=>{
    const user=req.user;
    try{
        const userId=user._id
        const cartItem= await cartService.addCartItem(userId,req.body);
        return res.status(200).send(cartItem)
    }catch(error){
        res.status(500).json({error:error.message})
    }
 
}

module.exports={
    findUserCart,
    AddItemToCart
 
}