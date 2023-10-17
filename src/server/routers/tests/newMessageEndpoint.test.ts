import request from "supertest";
import app from "../..";
import {
  expectedBadResponse,
  expectedCorrectResponse,
  invalidMessagePayload,
  validMessagePayload,
} from "./newMessageEnspoint.testObjects";

describe("Given /newMessage endpoint", () => {
  describe("When it's called with valid payload", () => {
    test("Then it should respond with 200 and a sucess message", async () => {
      const requestPath = `/newMessage`;

      const { body } = await request(app)
        .post(requestPath)
        .send(validMessagePayload)
        .expect(200);

      expect(body).toEqual(expectedCorrectResponse);
    });
  });
  describe("When it's called with an invalid payload", () => {
    test("Then it should respond with 400", async () => {
      const requestPath = `/newMessage`;

      const { body } = await request(app)
        .post(requestPath)
        .send(invalidMessagePayload)
        .expect(400);

      expect(body).toEqual(expectedBadResponse);
    });
  });
});
