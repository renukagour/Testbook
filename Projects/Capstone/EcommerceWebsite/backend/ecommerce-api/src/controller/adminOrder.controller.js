const orderService = require('../services/order.service');

//get
const getAllOrders = async (req,res)=>{
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        
        res.status(500).send({error: error.message});
    }
}

//put method
const confirmedOrders = async (req,res)=>{
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        
        res.status(500).send({error: error.message});
    }
}

const shippOrders = async (req,res)=>{
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        
        res.status(500).send({error: error.message});
    }
}

const deliverOrders = async (req,res)=>{
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        
        res.status(500).send({error: error.message});
    }
}

const cancelledOrders = async (req,res)=>{
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        
        res.status(500).send({error: error.message});
    }
}

const deleteOrders = async (req,res)=>{
    try {
        const orderId = req.params.orderId;
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        
        res.status(500).send({error: error.message});
    }
}

module.exports = {
    getAllOrders,
    confirmedOrders,
    shippOrders,
    deliverOrders,
    cancelledOrders,
    deleteOrders,
 
}