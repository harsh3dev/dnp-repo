export default function ListOfPlayers({ players }) {
  return players.map((player) => {
    return (
      <div>
        <li>
          Mr. {player.name} <span>{player.score}</span>
        </li>
      </div>
    );
  });
}
