import Card from "./components/Card";
import FishCurry from "./assets/menu-1.png";
import Noodles from "./assets/menu-2.png";
import Biriyani from "./assets/menu-3.png";
import PaneerCurry from "./assets/menu-4.png";
import Billing from "./components/Billing";
import FavouriteFood from "./components/FavouriteFood";

function App() {
  const foods = [
    { image: FishCurry, name: "Fish Curry", price: "Rs 650" },
    { image: Biriyani, name: "Biriyani", price: "Rs 1450" },
    { image: Noodles, name: "Noodles", price: "Rs 1299" },
    { image: PaneerCurry, name: "Paneer Curry", price: "Rs 700" },
  ];

  const listItems = foods.map((food) => (
    <Card image={food.image} name={food.name} price={food.price} />
  ));

  return (
    <>
      {listItems}
      <Billing />
      <br />
      <br />
      <br />
      <FavouriteFood />
    </>
  );
}

export default App;
