export default function Showcase(props) {
  return props.id % 2 === 0 ? (
    <div className="showcase">
      <img src={props.src} alt="showcase image" onClick={props.onClick} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  ) : (
    <div className="showcase">
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <img
        src={props.src}
        alt="showcase image"
        onClick={props.onClick}
        className={"invert-shadow"}
      />
    </div>
  );
}
