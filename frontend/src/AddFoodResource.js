// import React, { useState } from "react";

// function AddFoodResource({ onAdd }) {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [contact, setContact] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newResource = { name, location, contact };

//     fetch("http://localhost:3000/api/food-resources", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newResource),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         onAdd(data); // tell parent component to update list
//         setName("");
//         setLocation("");
//         setContact("");
//       })
//       .catch((err) => console.error("Error:", err));
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Contact"
//         value={contact}
//         onChange={(e) => setContact(e.target.value)}
//         required
//       />
//       <button type="submit">Add Resource</button>
//     </form>
//   );
// }

// export default AddFoodResource;



import React, { useState } from 'react';

function AddFoodResource({ onResourceAdded }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newResource = { name, location, contact };

    fetch("http://localhost:5000/api/food-resources", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newResource)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add resource");
        return res.json();
      })
      .then(() => {
        alert("Food Resource Added!");
        onResourceAdded(); // refresh FoodList
        setName("");
        setLocation("");
        setContact("");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Food Resource</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      /><br />
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      /><br />
      <button type="submit">Add Resource</button>
    </form>
  );
}

export default AddFoodResource;

