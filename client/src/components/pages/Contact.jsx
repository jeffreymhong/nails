import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { v4 as uuidv4 } from "uuid";

import hours from "../../data/hours";

export default function Contact(props) {
  const position = [40.7066582, -74.0065385];
  return (
    <section id="contact">
      <div id="not-map">
        <div id="text">
          <h1>Contact Us!</h1>
          <p>
            <b>Phone number:</b> <a href="tel:2125090777">(212)-509-0777</a>{" "}
            <br />
            <b>Email:</b>{" "}
            <a href="mailto:nail125ny@gmail.com">nail125ny@gmail.com</a> <br />
            <small>
              *We typically respond fastest to phone calls. Emails can take a
              couple of days.
            </small>
          </p>
          <h2>Hours of Service</h2>
          <ul>
            {hours.map((day) => (
              <li key={uuidv4()}>
                {day.day}: {day.opening}-{day.closing}
              </li>
            ))}
          </ul>
          <p>
            <b>Address:</b> 125 Maiden Lane, New York, NY 10038{" "}
            <span>
              <a
                href="https://www.google.com/maps/place/Nail+125/@40.7066582,-74.0065385,15z/data=!4m2!3m1!1s0x0:0xdd6a6a8d4be14d6f?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
              >
                (Click to view in Google Maps)
              </a>
            </span>
          </p>
        </div>
        <img src="/assets/wall.png" alt="nail wall" />
      </div>
      <MapContainer
        // force a re-render
        center={position}
        zoom={60}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Nail125 <br />
            <a
              href="https://www.google.com/maps/place/Nail+125/@40.7066582,-74.0065385,15z/data=!4m2!3m1!1s0x0:0xdd6a6a8d4be14d6f?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
            >
              See on Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
