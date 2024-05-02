const mongoose = require("mongoose");
const { Schema } = mongoose;
const SportsmenSchema = new Schema({
  SpmanID: {
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
  clubName: {
    type: String,
  },
  sports: {
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
module.exports = mongoose.model("Sportsmen", SportsmenSchema);
