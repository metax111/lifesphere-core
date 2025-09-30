const express = require("express");
const app = express();

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.get("/tasks", (req, res) => {
  res.json([{ id: 1, task: "Sample task", status: "pending" }]);
});

const PORT = 4004;
app.listen(PORT, () => console.log(`Life OS Service running on ${PORT}`));
