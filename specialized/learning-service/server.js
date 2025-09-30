const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample learning endpoint
app.get("/courses", (req, res) => {
  res.json([
    { id: 1, title: "Introduction to AI" },
    { id: 2, title: "FastAPI for Beginners" }
  ]);
});

const PORT = 4103;
app.listen(PORT, () => console.log(`Learning Service running on port ${PORT}`));
