const Admin = require("../Models/Admin.model");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// Function to register a new admin
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    admin = new Admin({ name, email, password });

    await admin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


//Function to log in an admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    if (admin.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    res.json({ message: "Admin login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to get all admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}


//verify Sponsor
exports.verifySponsor = async (req, res) => {
  try {
    const sponsorID = req.params.sponsorID;
    const sponsor = await Sponsor.findOneAndUpdate(
      { sponsorID },
      { $set: { verified: true } },
      { new: true }
    );
    if (!sponsor) {
      return res.status(400).json({ message: "Invalid sponsor ID" });
    }
    res.json({ message: "Sponsor verified successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//delete sponsor
