/* eslint-disable import/first */
// eslint-disable-next-line import/newline-after-import
import dotenv from "dotenv";
dotenv.config();

import debug from "debug";
import chalk from "chalk";
import startServer from "./server/startServer";
import app from "./server";

const debugInConsole = debug("portfolio:root"); // Debug section setup

// Enviroment varialbe grab
const port = process.env.PORT || "4000";

// Services initialization
(async () => {
  try {
    debugInConsole(chalk.white("Starting server..."));
    await startServer(port, app); // Start the server
  } catch (error) {
    debugInConsole(`Error: ${error.message}`); // Debug any startup failiures to the console
  }
})();
