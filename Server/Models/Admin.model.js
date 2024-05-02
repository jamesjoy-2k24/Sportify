const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  },
  imageUrl: String,
  role: {
    type: String,
    enum: ["admin"],
    default: "admin",
    required: true,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);

// Hash password before saving
// AdminSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }

//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// AdminSchema.methods.comparePassword = async function (password) {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw new Error("Error comparing passwords: " + error.message);
//   }
// };
