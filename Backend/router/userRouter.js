const express = require("express");
const { getUser, getUserById, createUser, editUser, deleteUser } = require("../controller/userController");

const userRoute = express.Router();

userRoute.get("/", getUser);          // GET all users
userRoute.get("/:id", getUserById);   // GET user by id
userRoute.post("/", createUser);      // CREATE user
userRoute.put("/:id", editUser);      // UPDATE user
userRoute.delete("/:id", deleteUser); // DELETE user

module.exports = userRoute;
