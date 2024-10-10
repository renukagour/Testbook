const express = require("express");
const router = express.Router();

const authController = require("../controller/auth.controller");

//create user
router.post("/signup", authController.register);

//login user

router.post("/signin", authController.login);

module.exports = router ;

//This is the route for handling user authentication. It includes endpoints for user registration and login. User registration requires a username, email, and password, while user login requires a username or email and password.
