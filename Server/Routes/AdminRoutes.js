const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/AdminController");

router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/", adminController.getAdmins);

module.exports = {router};
