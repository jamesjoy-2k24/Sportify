const express = require("express");
const router = express.Router();
const AdminController = require("../Controllers/AdminController");

//all function of admin
router.post("/create", AdminController.createAdmin);
// router.get("/", AdminController.getAllAdmins);
// router.get("/:id", AdminController.getAdmin);
// router.put("/:id", AdminController.updateAdmin);
// router.delete("/:id", AdminController.deleteAdmin);

//exports
module.exports = { router }