const express = require("express");
const cors = require("cors");
const connectDB = require("./DB/connectDB");
const AdminRoutes = require("./Routes/AdminRoutes");

const app = express();
const PORT = 3008;

// Middleware
app.use(cors());
app.use(express.json());

// Routes CRUD
app.use("/admin", AdminRoutes.router);

// Error handling for database connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
