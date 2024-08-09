import Showcase from "../miscallaneous/Showcase";
import showcaseData from "../../data/data";
import { v4 as uuidv4 } from "uuid";
import Grow from "@mui/material/Grow";

export default function Home() {
  return (
    <section id="home">
      {["/service", "/reservation", "/about"].map((page, index) => (
        <Showcase
          key={uuidv4()}
          id={index}
          title={showcaseData[index].title}
          content={showcaseData[index].content}
          src={showcaseData[index].src}
          onClick={() => {
            window.location.href = page;
          }}
        />
      ))}
    </section>
  );
}
