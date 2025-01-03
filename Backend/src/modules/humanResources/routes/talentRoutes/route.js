const express = require("express");
const router = express.Router();
const talentController = require("../../controllers/talentController/controller.js");

router.get("/get", talentController.get);

module.exports = router;