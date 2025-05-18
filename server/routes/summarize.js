const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const { Pool } = require("pg");
const authMiddleware = require("./middleware/middlewareAuth");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// SQL Data setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

router.post("/", authMiddleware, async (req, res) => {
  const { article } = req.body;
  const userId = req.userId;

  try {
    let content = article;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Can you please format the article with proper line breaks and paragraph spacing, and just post the content without a response? and do not repeat the article question either\n\n${article}`,
        },
      ],
    });
    const summary = completion.choices[0].message.content;

    // Save to SQL database
    try {
      // Add summary and user data
      await pool.query(
        "INSERT INTO summaries (original, summary, user_id) VALUES ($1, $2, $3)",
        [content, summary, userId]
      );
    } catch (error) {
      console.error(error);
    }

    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get all summaries
router.get("/", authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, summary, created_at FROM summaries WHERE user_id = $1 ORDER BY created_at DESC",
      [req.userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch summaries." });
  }
});

module.exports = router;
