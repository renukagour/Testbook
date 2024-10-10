const orderService= require('../services/order.service')

const createOrder = async (req,res)=>{
    const user=await req.user;
    try{
        
        // console.log(user ,"\n",userId);
        const createdOrder= await orderService.createOrder(user,req.body)
        return res.status(201).send(createdOrder)
    }catch(error){
        res.status(500).send({error:error.message})
    }
 
}

const findOrderById = async (req,res)=>{
    const user= await req.user;
    try{
        const createdOrder= await orderService.findOrderById(req.params.id);
        return res.status(201).send(createdOrder)
    }catch(error){
        res.status(500).json({error:error.message})
    }
 
}

const orderHistory = async (req,res)=>{
    const user=await req.user;
    try{
        const userId=user._id
        const createdOrder= await orderService.usersOrderHistory(userId)
        return res.status(201).send(createdOrder)
    }catch(error){
        res.status(500).json({error:error.message})
    }
 
}

module.exports={
    createOrder,
    findOrderById,
    orderHistory
}