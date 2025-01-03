const loadEnv = require("./config/loadEnv.js");
const mountSubApps = require("./utils/mountSubApps.js");
const startDevToolsServer = require("./utils/startDevToolsServer.js");
const express = require("express");
const app = express();
loadEnv();

// mount the sub-apps
mountSubApps(app);

// run the server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});

// dev tools server
if (process.env.ENVIRONMENT === "development") {
  startDevToolsServer();
}