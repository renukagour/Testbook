const jwt=require('jsonwebtoken');
const env = require("dotenv");

env.config();

const generateToken=(userId)=>{
    // generate JWT token here
    // if js if both key and value same you can give sign{value} instead sign{key, value}
    // ex. jwt.sign({userId:userId}) also use sign({userId})
    const token=jwt.sign({ userId },process.env.JWT_SECRET_KEY,{ expiresIn: '48h' });
    return token;
}

const getUserIdFromToken = (token)=>{
 
    try {
        // verify the token
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decodedToken.userId;
    } catch (error) {
        console.error("Error in getting userId from token: ", error);
        return null;
    }
}

module.exports={
    generateToken,
    getUserIdFromToken
}