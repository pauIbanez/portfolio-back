/* eslint-disable import/prefer-default-export */
import { ErrorSeverety } from "../../types/errorTypes/ServerError";
import ControledError from "./ControledError";

export const getInvalidRegistrationDataError = (
  messages: string[]
): ControledError =>
  new ControledError({
    name: "INVALIDMESSAGEDATA",
    message: "Invalid message payload",
    statusCode: 400,
    messageToSend: `Invalid message data: ${messages.join(", ")}`,
    severety: ErrorSeverety.low,
    extraData: {
      errors: messages.join(", "),
    },
  });
