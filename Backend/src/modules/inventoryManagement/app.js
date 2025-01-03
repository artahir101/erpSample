const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes/route.js");

app.use("/products", productRoutes);

module.exports = app;