const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const mongoose = require("mongoose");
const cloudinary=require("cloudinary");

const userRoutes=require("./src/routes/user.route")
const categoryRoutes=require("./src/routes/category.route")
const productRoutes=require("./src/routes/product.route")
const reviewRoutes=require("./src/routes/review.route")
const cartRoutes=require("./src/routes/cart.route")
const orderRoutes=require("./src/routes/order.route")

const app = express();
env.config();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(
    `mongodb+srv://${process.env.mongo_USERNAME}:${[process.env.mongo_PASSWORD]}@ecommerce-store.revam.mongodb.net/${process.env.mongo_DATABASE}?retryWrites=true&w=majority`
)
.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log(err);
})

cloudinary.config({
    cloud_name:`${process.env.CLOUD_NAME}`,
    api_key:`${process.env.API_KEY}`,
    api_secret:`${process.env.API_SECRET}`
})

app.use('/healthcheck',(req,res)=>{
    res.send('Server is running...ok!')
})
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",reviewRoutes);
app.use("/api",cartRoutes);
app.use("/api",orderRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Backend server is running ${process.env.PORT} !`);
})