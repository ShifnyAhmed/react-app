import React, { useState } from "react";

function FavouriteFood() {
  const [foods, setFoods] = useState(["Burger", "Submarine", "Nasi Goreng"]);

  function handleAddFood() {
    const foodInput = document.getElementById(
      "foodInput"
    ) as HTMLInputElement | null;
    if (foodInput) {
      const newFood = foodInput.value;
      foodInput.value = ""; // Clear the input value

      if (newFood !== "") setFoods((f) => [...f, newFood]);
    }
  }
  function handleRemoveFood(index: number) {
    setFoods(foods.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h2> List of favorite foods</h2>

      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input
        type="text"
        id="foodInput"
        placeholder="Enter Your Favorite Food"
      />
      <button onClick={handleAddFood}> Add Food</button>
    </div>
  );
}

export default FavouriteFood;
