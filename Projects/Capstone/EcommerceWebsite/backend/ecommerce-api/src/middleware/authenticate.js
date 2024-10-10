const jwtProvider= require('../config/jwtProvider');
const userService=require('../services/user.service');

//if all process is done it goes to next process that why used next
const authenticate = async (req, res, next) => {

    try {

        //we get -> Bearer token -> after split it gets convert to -> [Bearer,token]
        const token = req.headers.authorization?.split(" ")[1];
        // console.log("in authnticate  token ",token);

        //if not token
        if (!token) {
            return res.status(404).send({ error: "token not found..." });
        }

        // from token getting userId -> from userId getting user
        const userId=jwtProvider.getUserIdFromToken(token);
        
        // console.log("in authnticate  userId ",userId);
        if(!userId) {
            return res.status(401).send({ error: "unauthorized, invalid token" });
        }
        const user=await userService.findUserById(userId);

        if (!user) {
            return res.status(404).send({ error: "User not found with id " + userId });
        }
        // console.log("In authenticate ",user);
        req.user = user;
      
        // console.log("In authenticate ",req.user);
    } catch (error) {
          return res.status(500).send({ error: error.message });
    }
    next(); //calling next middleware
}

module.exports=authenticate;