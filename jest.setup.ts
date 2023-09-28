import dotenv from "dotenv";

dotenv.config();

const originalEnv = { ...process.env };

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv };
  process.env.TOKEN_SECRET = "Super secure secret";
});

afterEach(() => {
  process.env = originalEnv;
});
