import notFoundError from "./notFoundError";
import { expectedStatus, testNotFoundError } from "./notFoundError.testObjects";

describe("Given notFoundError", () => {
  describe("When It's called", () => {
    test("Then it should call res.status with 404", () => {
      const res: any = {
        status: jest.fn().mockReturnThis(),
        json: () => {},
      };

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call res.json with error true and message 'Resource not found'", () => {
      const expectedError = testNotFoundError;

      const res: any = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      notFoundError(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedError);
    });
  });
});
