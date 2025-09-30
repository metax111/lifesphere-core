const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample logging endpoint
app.post("/log", (req, res) => {
  const { level, message } = req.body;
  console.log(`[${level}] ${message}`);
  res.json({ status: "logged", level, message });
});

const PORT = 4005;
app.listen(PORT, () => console.log(`Logging Service running on port ${PORT}`));
