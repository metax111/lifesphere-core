const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample health AI endpoint
app.post("/analyze", (req, res) => {
  const { data } = req.body;
  // Placeholder AI logic: count characters
  const result = data ? data.length : 0;
  res.json({ input: data, result });
});

const PORT = 4106;
app.listen(PORT, () => console.log(`Health AI Service running on port ${PORT}`));
