export enum MessageType {
  JobOportunity = "jobOportunity",
  Collaboration = "collaboration",
  GeneralQuestion = "generalQuestion",
  Other = "other",
  default = "default",
}

interface MessageData {
  firstName: string;
  lastName: string;
  messageType: MessageType;
  typeVariable?: string;
  email: string;
  subject: string;
  message: string;
  language: "es" | "en";
}

export default MessageData;
