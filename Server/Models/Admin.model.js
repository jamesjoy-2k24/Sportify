const mongoose = require("mongoose");
const { Schema } = mongoose;
const AdminSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
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
module.exports = mongoose.model("Admin", AdminSchema);
