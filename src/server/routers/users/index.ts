import express from "express";

// Router creation
const usersRouter = express.Router();

// Router endpoint chain
usersRouter.get("/newMessage", messageDataValidator, sendMessage);

export default usersRouter;
