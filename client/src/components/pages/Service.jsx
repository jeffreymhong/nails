import services from "../../data/service";
import Combo from "../miscallaneous/Combo";
import Carousel from "../miscallaneous/Carousel";
import { v4 as uuidv4 } from "uuid";

export default function Service() {
  return (
    <section id="service">
      <Carousel />
      <div id="services">
        <h1>Our Services</h1>
        <ol>
          {services.map((service) => (
            <Combo key={uuidv4()} name={service.name} cost={service.cost} />
          ))}
        </ol>
        <p>
          We do <b>NOT</b> use <b>UV light</b> for gel nail services <br />
          We use <b>therpy gloves</b> for basic manicure services
        </p>
      </div>
    </section>
  );
}
