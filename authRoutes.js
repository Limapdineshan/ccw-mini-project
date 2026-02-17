const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./db");
require("dotenv").config();

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;


  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  let facultyCode = null;

  if (role == "student") {
    facultyCode = req.body.facultyCode;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (name, email, password, role, faculty_code) VALUES (?, ?, ?, ?, ?)",
      [name, email, hashedPassword, role, facultyCode],
      (err) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res.status(409).json({ message: "User already exists" });
          }
          return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({ message: "Signup successful" });
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const user = results[0];

      try {
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res
            .status(401)
            .json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );

        res.json({
          token,
          role: user.role,
        });
      } catch (err) {
        res.status(500).json({ message: "Password comparison failed" });
      }
    }
  );
});

module.exports = router;
