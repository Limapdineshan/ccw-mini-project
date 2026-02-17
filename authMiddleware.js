const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; 
    next();
  });
}

function teacherOnly(req, res, next) {
  if (req.user.role !== "teacher") return res.status(403).json({ message: "Access denied. Teachers only." });
  next();
}

module.exports = { authenticateToken, teacherOnly };
