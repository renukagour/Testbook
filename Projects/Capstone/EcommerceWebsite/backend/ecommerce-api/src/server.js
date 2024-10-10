const app= require(".");

const env = require("dotenv");
const { connectDb } = require("./config/db");

env.config();


app.listen(process.env.PORT, async() => {
    await connectDb();
    console.log(`server started on port ${process.env.PORT || 5000}`);
});