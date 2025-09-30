const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample notification endpoint
app.post("/notify", (req, res) => {
  const { userId, message } = req.body;
  console.log(`Notify user ${userId}: ${message}`);
  res.json({ status: "sent", userId, message });
});

const PORT = 4006;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));
