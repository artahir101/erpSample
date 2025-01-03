const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController/controller.js");

router.get("/get", productController.get);

module.exports = router;