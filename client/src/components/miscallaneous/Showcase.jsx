import { useInView } from "react-intersection-observer";

export default function Showcase(props) {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  return props.id % 2 === 0 ? (
    <div className="showcase">
      <img
        src={props.src}
        alt="showcase image"
        onClick={props.onClick}
        ref={ref}
        className={"invert-shadow" + (inView ? " visible" : "")}
      />
      <div ref={ref} className={inView ? "visible" : ""}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  ) : (
    <div className="showcase">
      <div ref={ref} className={inView ? "visible" : ""}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <img
        src={props.src}
        alt="showcase image"
        onClick={props.onClick}
        ref={ref}
        className={"invert-shadow" + (inView ? " visible" : "")}
      />
    </div>
  );
}
