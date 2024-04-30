const AdminModel = require("../Models/Admin.model");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.findOne({ email });
    if (admin && password === admin.password) {
      res.json(admin);
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};
