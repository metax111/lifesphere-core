const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample relationships endpoint
app.get("/friends", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

const PORT = 4105;
app.listen(PORT, () => console.log(`Relationship Service running on port ${PORT}`));
