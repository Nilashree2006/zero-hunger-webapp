const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let foods = []; // memory la save pannrom

// GET all foods
app.get("/foods", (req, res) => {
  res.json(foods);
});

// POST add new food
app.post("/foods", (req, res) => {
  const newFood = { id: Date.now().toString(), ...req.body };
  foods.push(newFood);
  res.json(newFood);
});

// DELETE a food
app.delete("/foods/:id", (req, res) => {
  const { id } = req.params;
  foods = foods.filter((f) => f.id !== id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
