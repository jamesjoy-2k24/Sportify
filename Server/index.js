const express = require("express");
const connectDB = require("./DB/connectDB");
const SponsorRoutes = require("./Routes/Sponsor.Routes");
const AdminRoutes = require("./Routes/Admin.Routes");
cors = require("cors");

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

    app.use(express.json());
    app.use("/sponsor", SponsorRoutes.router);
    app.use("/admin", AdminRoutes.router);
  } catch (error) {
    console.log(error);
  }
};
startServer();
