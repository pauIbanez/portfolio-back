import MessageData, { MessageType } from "../../../../types/MessageData";

export const validMessagePayload: MessageData = {
  firstName: "test",
  lastName: "name",
  messageType: MessageType.JobOportunity,
  typeVariable: "company",
  email: "email@mail.com",
  subject: "subject",
  message: "message",
};

export const missingNameMessagePayload = {
  lastName: "name",
  messageType: MessageType.JobOportunity,
  typeVariable: "company",
  email: "email@mail.com",
  subject: "subject",
  message: "message",
};
