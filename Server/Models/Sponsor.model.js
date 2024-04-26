const mongoose = require("mongoose");
const { Schema } = mongoose;
const SponsorSchema = new Schema({
  sponsorID: {
    type: String,
  },
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  NIC: {
    type: String,
    required: true,
    unique: true,
  },
  companyName: {
    type: String,
  },
  location: {
    type: Number,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  role: {
    type: String,
  },
});
module.exports = mongoose.model("Sponsor", SponsorSchema);
