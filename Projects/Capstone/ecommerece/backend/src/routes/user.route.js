const express=require("express");
const userController=require("../controller/user.controller");
const router=express.Router();

router.post("/register",userController.signupController);
router.post("/login",userController.loginController);

router.get("/user/profile",userController.getUserProfile);
module.exports=router;