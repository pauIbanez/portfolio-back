import Joi from "joi";
import { MessageType } from "../../types/MessageData";

const messageData = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  messageType: Joi.string().valid(...Object.values(MessageType)),
  typeVariable: Joi.string().allow("", null),
  email: Joi.string().required(),
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

export default messageData;
