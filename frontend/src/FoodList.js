import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const FoodList = forwardRef((props, ref) => {
  const [foods, setFoods] = useState([]);

  // Example fetch function
  const fetchFoods = async () => {
    // Replace with real API call
    const data = [
      { id: 1, name: "Rice" },
      { id: 2, name: "Wheat" },
    ];
    setFoods(data);
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  // Expose fetchFoods to parent
  useImperativeHandle(ref, () => ({
    fetchFoods
  }));

  return (
    <div>
      <h2>Available Foods</h2>
      <ul>
        {foods.map(food => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default FoodList;
