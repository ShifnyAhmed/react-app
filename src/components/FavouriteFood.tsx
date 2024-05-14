import React, { useState } from "react";

function FavouriteFood() {
  const [food, setFood] = useState({
    FoodName: "MilkShake",
    FoodPrice: 500,
    FoodType: "Drink",
  });

  function handleFoodNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFood((f) => ({ ...f, FoodName: event.target.value }));
  }

  function handleFoodTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFood((f) => ({ ...f, FoodType: event.target.value }));
  }

  function handleFoodPriceChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFood((f) => ({ ...f, FoodPrice: parseInt(event.target.value) }));
  }

  return (
    <div>
      <h3>
        Your Favourite is {food.FoodName} which is a {food.FoodType} and it
        costs Rs.{food.FoodPrice}
      </h3>

      <b>Enter Your Favourite Food: </b>
      <br />
      <input
        type="text"
        value={food.FoodName}
        onChange={handleFoodNameChange}
      />
      <br />
      <br />

      <b>Enter The Type: </b>
      <br />
      <input
        type="text"
        value={food.FoodType}
        onChange={handleFoodTypeChange}
      />
      <br />
      <br />

      <b>Enter The Price: </b>
      <br />
      <input
        type="number"
        value={food.FoodPrice}
        onChange={handleFoodPriceChange}
      />
    </div>
  );
}

export default FavouriteFood;
