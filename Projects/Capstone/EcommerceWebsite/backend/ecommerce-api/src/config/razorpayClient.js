const Razorpay = require('razorpay');
const env = require("dotenv");

env.config();

const razorpay = new Razorpay({
  key_id: process.env.razorpay_key_id,
  key_secret: process.env.razorpay_key_secret,
});

module.exports =  razorpay ;