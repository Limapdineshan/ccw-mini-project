const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./authRoutes");

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on my port 5000");
});
