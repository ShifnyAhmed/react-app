import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleOnClickButton = () => {
    setAlertVisibility(true);
  };
  const closeAlertOnCLick = () => {
    setAlertVisibility(false);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClick={closeAlertOnCLick}>
          Hello <h1>Mister</h1>
        </Alert>
      )}

      <Button onClick={handleOnClickButton}>Click Me Nigga!</Button>
    </div>
  );
}

export default App;
