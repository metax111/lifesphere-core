const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = process.env.JWT_SECRET || "SECRET_KEY";

app.post("/login", (req, res) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ error: "Username is required" });

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(4001, () => console.log("Auth Service running on port 4001"));
