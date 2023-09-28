import express from "express";
import messageDataValidator from "../middlewares/requestPayloadValidators/messageDataValidator/messageDataValidator";
import sendMessage from "../controllers/sendMessage/sendMessage";

const mainRouter = express.Router();

mainRouter.get("/newMessage", messageDataValidator, sendMessage);

export default mainRouter;
