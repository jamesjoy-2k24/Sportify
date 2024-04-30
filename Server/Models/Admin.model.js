const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  confirmPassword: {
    type: String,
    select: false,
  },
  imageUrl: String,
  role: {
    type: String,
    required: true,
    enum: ["admin"],
  },
});

// Indexes for efficient querying (optional but recommended)
AdminSchema.index({ email: 1 });

module.exports = mongoose.model("Admin", AdminSchema);
