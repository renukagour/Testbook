const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category Name is Required"],
        unique: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const Category = mongoose.model("Category", categorySchema);
module.exports = Category