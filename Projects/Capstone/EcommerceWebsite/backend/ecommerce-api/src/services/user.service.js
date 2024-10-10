const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;

    //check email exist
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exists with email " + email);
    }

    //hashing password
    password = await bcrypt.hash(password, 10);

    //create new user
    const user = await User.create({ firstName, lastName, email, password });

    console.log("created user: " + user);

    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

//find user by id

const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address"); //get address id
    if (!user) {
      throw new Error("User not found with id " + userId);
    }
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

//find user by email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found with Email" + email);
    }
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

// find user by token

const getUserProfileByToken = async (token) => {
  try {
    const userId = jwtProvider.getUserIdFromToken(token);
    //use this token to get userId
    const user = await findUserById(userId);

    if (!user) {
      throw new Error("User not found with id " + userId);
    }
    return user;
  } catch (e) {
    throw new Error(e.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUsers,
};
