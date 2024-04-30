const express = require("express");
const router = express.Router();
const AdminController = require("../Controllers/AdminController");

router.post("/login", AdminController.login);

module.exports = { router };
