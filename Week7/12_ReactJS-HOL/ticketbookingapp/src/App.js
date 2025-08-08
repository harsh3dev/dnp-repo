import { useState } from "react";
import "./App.css";
import Guest from "./components/Guest";
import User from "./components/User";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      <hr />
      {!isLogin ? (
        <Guest toggleLogin={toggleLogin} />
      ) : (
        <User toggleLogin={toggleLogin} />
      )}
    </div>
  );
}

export default App;
