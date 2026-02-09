const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");
require("dotenv").config();

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, role],
    (err) => {
      if (err) return res.status(500).json({ message: "User already exists" });
      res.status(201).json({ message: "Signup successful" });
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err || results.length === 0)
        return res.status(401).json({ message: "Invalid credentials" });

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch)
        return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ token, role: user.role });
    }
  );
});

module.exports = router;
