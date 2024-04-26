//import 
const express = require("express");
const mongoose = require("mongoose");
const Admin = require("../Models/Admin.model");

const router = express.Router();

//add admin
const createAdmin = async (req, res) => {
    const admin = await Admin.create(req.body);
    res.json(admin);
};

//exports
module.exports = {
    createAdmin
}