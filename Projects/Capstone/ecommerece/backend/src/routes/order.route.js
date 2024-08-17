const express=require("express");
const orderController=require("../controller/order.controller");
const router=express.Router();

router.post("/orders",orderController.createOrder);
router.get("/orders/user/:userId",orderController.getOrderByUserId);
router.get("/orders",orderController.getAllOrders);
router.put("/orders/:id",orderController.updateOrder);
router.delete("/orders/:id",orderController.deleteOrder);

module.exports=router;