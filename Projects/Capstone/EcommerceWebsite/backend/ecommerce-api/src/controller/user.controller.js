const userService = require("../services/user.service");

const getUserProfile = async (req, res) => {
  try {
    //we get -> Bearer token -> after split it gets convert to -> [Bearer,token]
    const jwt = req.headers.authorization?.split(" ")[1];
    // in js split with spaces converts string to array

    //if not token
    if (!jwt) {
      return res.status(404).send({ error: "unauthorized, no token provided" });
    }

    const user = await userService.getUserProfileByToken(jwt);

    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllUsers= async (req,res)=>{
    try {
        
        const users=await userService.getAllUsers();
        res.status(200).send(users);

    } catch (error) {
        return res.status(500).send({ error:error.message });
    }
}

module.exports ={
    getUserProfile,
    getAllUsers
}