const express=require("express");
const cartController=require("../controller/cart.controller");
const router=express.Router();

router.post("/carts",cartController.addToCart);
router.get("/carts/user/:userId",cartController.getCartByUserID);
router.delete("/carts/:id",cartController.deleCartByID);
router.delete("/carts/user/:userId",cartController.deleteAllCartsByUserId);

module.exports=router;