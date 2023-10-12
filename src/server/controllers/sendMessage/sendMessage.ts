import { NextFunction, Request, Response } from "express";
import EmailData from "../../utils/email/types";
import MessageData from "../../../types/MessageData";
import getMessageReceivedEmail from "../../utils/email/emailBuilders/messageReceivedEmail";
import getAwaitingAnswerEmail from "../../utils/email/emailBuilders/awaitingAnswerEmail";
import { sendEmail } from "../../utils/email";

const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  const message = req.body as MessageData;

  const toSenderEmailData: EmailData = {
    subject:
      message.language === "en"
        ? `Hello ${message.firstName}! Thanks for your email.`
        : `Hola ${message.firstName}! Gracias por tu email.`,
    to: message.email,
    internalEmailName: "Contact soon",
    html: getMessageReceivedEmail(message.firstName, message.language === "en"),
  };

  const toMeEmailData: EmailData = {
    subject: message.subject,
    to: "pauibanez2001@gmail.com",
    internalEmailName: `Awaiting answer from ${message.firstName}`,
    html: getAwaitingAnswerEmail(message, message.language === "en"),
  };

  try {
    await sendEmail(toSenderEmailData);
    await sendEmail(toMeEmailData);
  } catch (error) {
    next(error);
    return;
  }

  res.status(200).json({
    message: "Message received!",
  });
};

export default sendMessage;
