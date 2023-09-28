import { NextFunction, Request, Response } from "express";
import EmailData from "../../utils/email/types";
import MessageData from "../../../types/MessageData";

const sendMessage = (req: Request, res: Response, next: NextFunction) => {
  const messge = req.body as MessageData;

  const toSenderEmailData: EmailData = {
    subject: `Hello ${messge.firstName}! thanks for your email.`,
    to: messge.email,
    internalEmailName: "Contact soon",
    html: getMessageReceivedEmail(messge.firstName),
  };
};

export default sendMessage;
