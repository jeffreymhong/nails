import { useState } from "react";

export default function Reservation() {
  // state handling for name inputs
  const [name, setName] = useState({ fname: "", lname: "" });
  function handleName(event) {
    const name = event.target.name;
    const value = event.target.value;
    setName((previous) => ({ ...previous, [name]: value }));
  }

  // state handling for datetime input
  const [date, setDate] = useState("");
  function handleDate(event) {
    setDate(event.target.value);
  }

  // state handling for phone number input
  const [number, setNumber] = useState("");
  function handleNumber(event) {
    let newState = event.target.value;
    if (newState.length > 3) {
      if (newState[3] !== "-") {
        let list = [newState.slice(0, 3), "-", newState.slice(3)];
        newState = list.join("");
      }
    }
    if (newState.length > 7) {
      if (newState[7] !== "-") {
        let list = [newState.slice(0, 7), "-", newState.slice(7)];
        newState = list.join("");
      }
    }
    if (newState.length <= 12) setNumber(newState);
  }
  return (
    <section id="reservation">
      <h1>Reserve a date!</h1>
      <form action="/submit" method="post">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={name.fname}
          onChange={handleName}
          required
        />
        <label htmlFor="fname">Last Name</label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={name.lname}
          onChange={handleName}
          required
        />
        <label htmlFor="reservation-details">Reservation Details:</label>
        <input
          type="datetime-local"
          id="reservation-details"
          name="reservation-details"
          value={date}
          onChange={handleDate}
          required
        />
        <label htmlFor="phone">Enter your phone number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="###-###-####"
          value={number}
          onChange={handleNumber}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
