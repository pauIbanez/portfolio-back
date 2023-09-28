import sendMessage from "./sendMessage";
import { expectedValidResponse, message } from "./sendMessage.testObjects";

const mockSendEmail = jest.fn().mockResolvedValue("ASDDDDDDDDDDDD");

jest.mock("../../utils/email", () => ({
  sendEmail: jest.fn().mockImplementation(async () => mockSendEmail()),
}));

describe("Given sendMessage", () => {
  describe("When it's called passing a message and email responds right", () => {
    test("Then it should call sendEmail twice and call res.json", async () => {
      const req: any = {
        body: message,
      };
      const res: any = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      await sendMessage(req, res, next);

      expect(next).not.toHaveBeenCalled();
      expect(mockSendEmail).toHaveBeenCalledTimes(2);
      expect(res.json).toHaveBeenCalledWith(expectedValidResponse);
    });
  });
});
