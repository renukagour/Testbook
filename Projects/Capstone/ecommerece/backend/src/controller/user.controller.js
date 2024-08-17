const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupController=async(req,res)=>{
    try {
        const {firstname,lastname,email,password}=req.body;

        //validation
        if(!firstname || !lastname || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        //user already exist
        const existinUser=await User.findOne({email});
        if(existinUser){
            return res.status(400).json({message:"user already exist"});
        }

        const user = new User({firstname,lastname,email,password});
        await user.save();
        res.status(201).json("user created successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        //check if user exist
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"user does not exist"});
        }

        //check if password is correct
        const ispasswordValid=await bcrypt.compare(password,user.password);
        if(!ispasswordValid){
            return res.status(401).json({message:"invalid password"});
        }

        //generate jwt token after authentication
        const token=jwt.sign({id:user._id},"jwtsecret",{
            expiresIn:"10d",
        });

        res.status(200).json({user,token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}

const getUserProfile=async(req,res)=>{
    try {
        //check if user exist
        const userId=req.query.id;
        const user=await User.findById(userId);
        if(!user){
             res.status(404).json({message:"user not found"});
        }
        user.password=undefined;
        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


module.exports={
    signupController,
    loginController,
    getUserProfile
}