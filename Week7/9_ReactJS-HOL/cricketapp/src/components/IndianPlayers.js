export default function IndianPlayers({ AllPlayers }) {
  return AllPlayers.map((player) => {
    return (
      <div>
        <li>Mr. {player}</li>
      </div>
    );
  });
}
