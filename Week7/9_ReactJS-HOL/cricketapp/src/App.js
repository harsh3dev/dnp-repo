import "./App.css";
import EvenPlayers from "./components/EvenPlayers";
import IndianPlayers from "./components/IndianPlayers";
import ListOfPlayers from "./components/ListOfPlayers";
import OddPlayers from "./components/OddPlayers";
import Scorebelow70 from "./components/Scorebelow70";

function App() {
  const players = [
    {
      name: "Jack",
      score: 50,
    },
    {
      name: "Michael",
      score: 70,
    },
    {
      name: "John",
      score: 40,
    },
    {
      name: "Ann",
      score: 61,
    },
    {
      name: "Elisabeth",
      score: 61,
    },
    {
      name: "Sachin",
      score: 95,
    },
    {
      name: "Dhoni",
      score: 100,
    },
    {
      name: "Virat",
      score: 84,
    },
    {
      name: "Jadeja",
      score: 64,
    },
    {
      name: "Raina",
      score: 75,
    },
    {
      name: "Rohit",
      score: 80,
    },
  ];

  const T20players = ["Rohit", "Kohli", "Gill"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

  const AllPlayers = [...T20players, ...RanjiTrophyPlayers];

  let flag = false;

  if (flag === true) {
    return (
      <div className="App">
        <h1>List of Players</h1>
        <ListOfPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <div>
          <h1>Odd Players</h1>
          <OddPlayers AllPlayers={AllPlayers} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers AllPlayers={AllPlayers} />
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <IndianPlayers AllPlayers={AllPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
