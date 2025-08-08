import "./App.css";

function App() {
  const element = "Office Space";
  const url =
    "https://i.pinimg.com/originals/b0/36/00/b03600a0325148959b7e8c9d59a41cf9.jpg";
  const jsxAtt = (
    <img src={url} alt="Office Space" style={{ width: "25%", height: "25%" }} />
  );
  const office = { name: "DBS", rent: 50000, address: "Chennai" };
  const items = [
    "Ergonomic Chairs",
    "Standing Desks",
    "Projector",
    "High-Speed WiFi",
    "Air Conditioner",
    "CCTV Surveillance",
  ];
  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxAtt}
      <h1>Name: {office.name}</h1>
      <h3 style={office.rent < 60000 ? { color: "red" } : { color: "green" }}>
        Rent: Rs.{office.rent}
      </h3>
      <h3>Address: {office.address}</h3>
      <h3>Office Space Items :</h3>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
