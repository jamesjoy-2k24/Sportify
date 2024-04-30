const express = require("express");
const router = express.Router();
const SponsorController = require("../Controllers/SponsorController");

//all function of sponsor
router.post("/create", SponsorController.createSponsor);
router.get("/", SponsorController.getAllSponsors);
// router.get("/:id", SponsorController.getSponsor);
router.put("/:id", SponsorController.updateSponsor);
router.delete("/:id", SponsorController.deleteSponsor);

//export
module.exports = { router };
