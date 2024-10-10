const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");

const cartService = require("../services/cart.service.js");

const register = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);

    console.log('User registered with ID:', user._id);
    //getting cart
    //because when user login creates its cart
   const cart= await cartService.createCart(user._id);
    console.log('Cart created:', cart);
    return res.status(200).send({ jwt, message: "registration successful" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
 
  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res
        .status(400)
        .send({ message: "user not found with email", email });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    //your password, hash password keep sequence as it is to compare

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password..." });
    }

    const jwt = jwtProvider.generateToken(user._id);

    return res.status(200).send({ jwt, message: "login successful" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports ={
    register,
    login
}