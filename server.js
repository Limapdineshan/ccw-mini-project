const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./authRoutes"); // your login/signup
const teacherRoutes = require("./teacherRoutes");

app.use("/api/auth", authRoutes); // login/signup
app.use("/api/teacher", teacherRoutes); // teacher dashboard routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));