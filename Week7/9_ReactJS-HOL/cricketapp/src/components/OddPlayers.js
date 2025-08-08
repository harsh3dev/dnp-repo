export default function OddPlayers({ AllPlayers }) {
  const [first, , third, , fifth] = AllPlayers;
  return (
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
}
