import Card from "./components/Card";
import FishCurry from "./assets/menu-1.png";
import Noodles from "./assets/menu-2.png";
import Biriyani from "./assets/menu-3.png";
import PaneerCurry from "./assets/menu-4.png";

function App() {
  const fishCurry = { image: FishCurry, name: "Fish Curry", price: "Rs 650" };
  const noodles = { image: Noodles, name: "Noodles", price: "Rs 1299" };
  const biriyani = { image: Biriyani, name: "Biriyani", price: "Rs 1450" };
  const paneerCurry = {
    image: PaneerCurry,
    name: "Paneer Curry",
    price: "Rs 700",
  };

  const foods = [fishCurry, noodles, biriyani, paneerCurry];

  const listItems = foods.map((food) => (
    <Card image={food.image} name={food.name} price={food.price} />
  ));

  return <>{listItems}</>;
}

export default App;
