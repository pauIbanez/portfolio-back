import MessageData, { MessageType } from "../../../types/MessageData";

export const validMessagePayload: MessageData = {
  firstName: "test",
  lastName: "name",
  messageType: MessageType.JobOportunity,
  typeVariable: "company",
  email: "email@mail.com",
  subject: "subject",
  message: "message",
};

export const invalidMessagePayload = {
  test: "bad payload",
};

export const expectedCorrectResponse = {
  message: "Message received!",
};

export const expectedBadResponse = {
  code: 400,
  error: true,
  message: expect.stringContaining("Invalid message data:"),
};
