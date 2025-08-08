import { useState } from "react";

export default function HandleEvents() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    sayHello();
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  const sayHello = () => alert("Hello, Members!");
  const sayWelcome = (greet) => alert(greet);
  const message = () => alert("I was clicked");

  return (
    <div>
      <h3>count : {count}</h3>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button
        onClick={() => {
          sayWelcome("Welcome");
        }}
      >
        Say Welcome
      </button>
      <br />
      <button onClick={message}>Click on me</button>
    </div>
  );
}
