const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample work-life endpoint
app.get("/tasks", (req, res) => {
  res.json([
    { id: 1, task: "Complete project report", status: "pending" },
    { id: 2, task: "Attend team meeting", status: "done" }
  ]);
});

const PORT = 4104;
app.listen(PORT, () => console.log(`Work-Life Service running on port ${PORT}`));
