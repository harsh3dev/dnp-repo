import "./App.css";
import CurrencyConvertor from "./components/CurrencyConvertor";
import HandleEvents from "./components/HandleEvents";

function App() {
  return (
    <div className="App">
      <HandleEvents />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
