import messageDataValidator from "./messageDataValidator";
import { validMessagePayload } from "./messageDataValidator.testObjects";

describe("Given messageDataValidator", () => {
  describe("When it's passed a valid payload", () => {
    test("Then it should call next and replace req.body with the validated object", () => {
      const req: any = {
        body: validMessagePayload,
      };

      const next = jest.fn();

      messageDataValidator(req, null, next);

      expect(next).toHaveBeenCalledWith();
      expect(req.body).toEqual(validMessagePayload);
    });
  });
});
