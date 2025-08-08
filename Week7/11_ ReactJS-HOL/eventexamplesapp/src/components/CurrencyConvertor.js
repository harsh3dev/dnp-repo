import { useState } from "react";

export default function CurrencyConvertor() {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const convertVal = parseFloat(parseFloat(amount) * 0.011).toFixed(2);
    alert(`The Rs.${amount} in Euro is ${convertVal} `);
    setAmount("");
  };

  const handleInput = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount" style={{ marginRight: "50px" }}>
          Amount:{" "}
        </label>
        <input
          type="text"
          id="amount"
          placeholder="Enter Amount in Rupees"
          value={amount}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="currency" style={{ marginRight: "45px" }}>
          Currency:{" "}
        </label>
        <input type="text" name="" id="currency" value="Euro" />
        <br />
        <br />
        <button style={{ marginLeft: "175px" }}>convert</button>
      </form>
    </div>
  );
}
