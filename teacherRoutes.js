const express = require("express");
const router = express.Router();
const db = require("./db");
const { authenticateToken, teacherOnly } = require("./authMiddleware");

// Add a question
router.post("/add", authenticateToken, teacherOnly, async (req, res) => {
  const { question_text, option_a, option_b, option_c, option_d, correct_option } = req.body;
  const teacherId = req.user.id;

  try {
    const [result] = await db.promise().query(
      "INSERT INTO questions (question_text, option_a, option_b, option_c, option_d, correct_option, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [question_text, option_a, option_b, option_c, option_d, correct_option, teacherId]
    );
    res.status(201).json({ message: "Question added", questionId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a question by ID
router.delete("/delete/:id", authenticateToken, teacherOnly, async (req, res) => {
  const questionId = req.params.id;
  const teacherId = req.user.id;

  try {
    const [result] = await db.promise().query(
      "DELETE FROM questions WHERE id = ? AND created_by = ?",
      [questionId, teacherId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Question not found or not yours" });
    }
    res.json({ message: "Question deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all questions of this teacher
router.get("/myquestions", authenticateToken, teacherOnly, async (req, res) => {
  const teacherId = req.user.id;
  try {
    const [questions] = await db.promise().query(
      "SELECT * FROM questions WHERE created_by = ?",
      [teacherId]
    );
    res.json({ questions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;