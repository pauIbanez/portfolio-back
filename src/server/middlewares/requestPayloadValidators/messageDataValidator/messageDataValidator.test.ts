import messageDataValidator from "./messageDataValidator";
import {
  missingNameMessagePayload,
  validMessagePayload,
} from "./messageDataValidator.testObjects";

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

  describe("When it's passed a payload with missing firstName", () => {
    test("Then it should call next an error", () => {
      const req: any = {
        body: missingNameMessagePayload,
      };

      const next = jest.fn();

      messageDataValidator(req, null, next);

      expect(next).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalledWith();
    });
  });
});
