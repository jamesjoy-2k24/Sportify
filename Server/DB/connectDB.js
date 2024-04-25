require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

const { MONGO_URI } = process.env;

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }

  
};
module.exports = connectDB;

//Using Express
const app = express();
const port = 3005;
app.use(express.json());
app.use(cors());

//Listening to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});