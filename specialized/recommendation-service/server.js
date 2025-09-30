const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample recommendation endpoint
app.get("/recommendations", (req, res) => {
  res.json([
    { id: 1, title: "Learn Node.js" },
    { id: 2, title: "Build a FastAPI App" }
  ]);
});

const PORT = 4101;
app.listen(PORT, () => console.log(`Recommendation Service running on port ${PORT}`));
