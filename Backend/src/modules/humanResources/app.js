const express = require("express");
const app = express();
const recruitmentRoutes = require("./routes/recruitmentRoutes/route.js");
const talentRoutes = require("./routes/talentRoutes/route.js");

app.use("/recruitment", recruitmentRoutes);
app.use("/talent", talentRoutes);

module.exports = app;