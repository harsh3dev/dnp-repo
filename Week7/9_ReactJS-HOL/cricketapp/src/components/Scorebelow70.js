export default function Scorebelow70({ players }) {
  const players70 = players.filter((player) => player.score < 70);

  return players70.map((player) => {
    return (
      <div>
        <li>
          Mr. {player.name} <span>{player.score}</span>
        </li>
      </div>
    );
  });
}
