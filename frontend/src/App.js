import React, { useEffect, useState } from "react";

function App() {
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState("");

  const fetchFoods = async () => {
    const res = await fetch("http://localhost:5000/foods");
    const data = await res.json();
    setFoods(data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const addFood = async () => {
    if (!name.trim()) return;
    await fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
    fetchFoods();
  };

  const deleteFood = async (id) => {
    await fetch(`http://localhost:5000/foods/${id}`, { method: "DELETE" });
    fetchFoods();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🌍 Zero Hunger Project</h1>

      <input
        placeholder="Enter food name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addFood}>Add Food</button>

      <ul>
        {foods.map((f) => (
          <li key={f.id}>
            {f.name}{" "}
            <button style={{ color: "red" }} onClick={() => deleteFood(f.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
