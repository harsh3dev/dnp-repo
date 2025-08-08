export default function Guest({ toggleLogin }) {
  return (
    <div>
      <h2>
        Please sign up.&nbsp;&nbsp;
        <button style={{ padding: "10px 20px" }} onClick={toggleLogin}>
          Login
        </button>
      </h2>
      <hr />
      <h2>Welcome Guest</h2>
      <p>
        You can explore flight options but need to log in to book your tickets.
      </p>
      <ul>
        <li>Vistara: Mumbai to Goa – ₹5,200</li>
        <li>Akasa Air: Bangalore to Kochi – ₹3,500</li>
        <li>Go First: Delhi to Jaipur – ₹2,800</li>
      </ul>
    </div>
  );
}
