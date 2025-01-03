const mountSubApps = require("./utils/mountSubApps.js");
const express = require("express");
const app = express();

// mount the sub-apps
mountSubApps(app);

// run the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
