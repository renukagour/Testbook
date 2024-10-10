const mongoose = require("mongoose");
const env = require("dotenv");

env.config();


const mongoUrl = `mongodb+srv://${process.env.mongo_USERNAME}:${[process.env.mongo_PASSWORD]}@my-ecommerce-store.tmjtzbv.mongodb.net/${process.env.mongo_DATABASE}?retryWrites=true&w=majority`

const connectDb = () => {
    return mongoose.connect(mongoUrl)
    // mongoose
    // .connect(mongoUrl)
    // .then(() => {
    //     console.log("mongo db connected");
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
}

module.exports = { connectDb }