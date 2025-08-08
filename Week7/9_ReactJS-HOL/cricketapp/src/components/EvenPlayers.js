export default function EvenPlayers({ AllPlayers }) {
  const [, second, , fourth, , sixth] = AllPlayers;
  return (
    <div>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </div>
  );
}
