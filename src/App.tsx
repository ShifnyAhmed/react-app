import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Puttalam", "Colombo", "Nuwara Eliya", "Kandy", "Kalpity"];

  const handleSelectItem = (item: string) => {
    console.log("Selected " + item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        headings="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
