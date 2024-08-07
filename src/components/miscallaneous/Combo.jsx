export default function Combo(props) {
  return (
    <li className="combo">
      <h2>{props.name}</h2>
      <h3>Cost: {props.cost}</h3>
    </li>
  );
}
