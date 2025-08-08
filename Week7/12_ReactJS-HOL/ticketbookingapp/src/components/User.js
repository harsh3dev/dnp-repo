export default function User({ toggleLogin }) {
  const booked = () => {
    alert("Ticket Booked Successfully!");
  };

  return (
    <div>
      <button style={{ padding: "10px 10px" }} onClick={toggleLogin}>
        Logout
      </button>
      <h2>Welcome, User!</h2>
      <p>Book tickets for your flights...</p>
      <button style={{ padding: "5px 10px" }} onClick={booked}>
        Book Ticket
      </button>
    </div>
  );
}
