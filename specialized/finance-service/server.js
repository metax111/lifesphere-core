const express = require("express");
const app = express();

app.use(express.json());

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Sample finance endpoint
app.get("/balance", (req, res) => {
  res.json({ account: "123456", balance: 1000 });
});

const PORT = 4102;
app.listen(PORT, () => console.log(`Finance Service running on port ${PORT}`));
