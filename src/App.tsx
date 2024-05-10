import Card from "./components/Card";
import FishCurry from "./assets/menu-1.png";
import Noodles from "./assets/menu-2.png";
import Biriyani from "./assets/menu-3.png";
import PaneerCurry from "./assets/menu-4.png";

function App() {
  return (
    <>
      <Card image={FishCurry} name="Fish Curry" price="Rs 650" />
      <Card image={Noodles} name="Noodles" price="Rs 1299" />
      <Card image={Biriyani} name="Biriyani" price="1450" />
      <Card image={PaneerCurry} name="Paneer Curry" price="700" />
    <Card />
    </>
  );
}

export default App;
