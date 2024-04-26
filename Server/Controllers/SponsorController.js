//import
const express = require("express");
const mongoose = require("mongoose");
const Sponsor = require("../Models/Sponsor.model");

const router = express.Router();

//add sponsor
const createSponsor = async (req, res) => {
  const sponsor = await Sponsor.create(req.body);
  res.json(sponsor);
};

//Update sponsor
const updateSponsor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }
  const sponsor = await Sponsor.findByIdAndUpdate(id, req.body, { new: true });
  res.json(sponsor);
};

//Delete sponsor
const deleteSponsor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }
  await Sponsor.findByIdAndRemove(id);
  res.json({ message: "Sponsor deleted successfully" });
};
//get all sponsors
const getAllSponsors = async (req, res) => {
  const sponsors = await Sponsor.find();
  res.json(sponsors);
};

//exports
module.exports = {
  createSponsor,
  updateSponsor,
  deleteSponsor,
  getAllSponsors,
};
