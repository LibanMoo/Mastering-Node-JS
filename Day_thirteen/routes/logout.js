const express = require("express");
const router = express.Router();
const logoutContoller = require("../controllers/logoutContoller");
router.post("/", logoutContoller.handleLogout);

module.exports = router;
