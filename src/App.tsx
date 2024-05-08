import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleOnClickButton = () => {
    console.log("I Made A Clickable Button Nigga! How Cool Was That?");
  };

  return (
    <div>
      <Alert>
        Hello <h1>Mister</h1>
      </Alert>

      <Button onClick={handleOnClickButton}>Click Me Nigga!</Button>
    </div>
  );
}

export default App;
