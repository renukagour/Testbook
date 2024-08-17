const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "First Name is Required"]
    },
    lastname: {
        type: String,
        required: [true, "Last Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
                // return /\s+@\s+\.\s+/.test(value);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        minlength: [6, "Password must be atleast 6 characters long"]
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }

});

userSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User