const express = require("express");
const router = express.Router();
const recruitmentController = require("../../controllers/recruitmentController/controller.js");

router.get("/get", recruitmentController.get);

module.exports = router;