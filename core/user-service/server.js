const express = require("express");
const app = express();

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Get all users (sample data)
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
  ]);
});

// Get user by id (optional)
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
  ];
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

const PORT = 4002;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
