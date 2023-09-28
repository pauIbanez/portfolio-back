import MessageData from "../../../../types/MessageData";

const getAwaitingAnswerEmail = (message: MessageData) => `

  Received at: ${Date.now().toLocaleString()}.
  Message Type: ${message.messageType}.
  ${message.typeVariable && `Variable: ${message.typeVariable}`}
  Complete name: ${message.firstName} ${message.lastName}.
  From: ${message.email}.
  Subject: ${message.subject}.
  Message: \n
  ${message.message}.
`;

export default getAwaitingAnswerEmail;
