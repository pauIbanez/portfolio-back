import MessageData, { MessageType } from "../../../types/MessageData";

export const message: MessageData = {
  firstName: "test",
  lastName: "name",
  messageType: MessageType.JobOportunity,
  typeVariable: "company",
  email: "email@mail.com",
  subject: "subject",
  message: "message",
  language: "en",
};

export const expectedValidResponse = {
  message: "Message received!",
};
