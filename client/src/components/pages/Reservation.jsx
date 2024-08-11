import { useState } from "react";
import services from "../../data/service";

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
  const [dateOptional, setDateOptional] = useState("");
  function handleDateOptional(event) {
    setDateOptional(event.target.value);
  }

  // state handling for treatment input
  const [combo, setCombo] = useState("no-idea");
  function handleCombo(event) {
    setCombo(event.target.value);
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

  // state handling for email
  const [email, setEmail] = useState("");
  function handleEmail(event) {
    setEmail(event.target.value);
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
        <label htmlFor="combo">Select a Treatment:</label>
        <select
          id="combo"
          name="combo"
          value={combo}
          onChange={handleCombo}
          required
        >
          <option value="no-idea">Haven't decided yet</option>
          {services.map((service, index) => (
            <option value={"combo" + (index + 1)}>{service.name}</option>
          ))}
          <option value="multiple">Multiple Treatments</option>
        </select>
        <label htmlFor="reservation-date">Reservation Date:</label>
        <input
          type="datetime-local"
          id="reservation-date"
          name="reservation-date"
          value={date}
          onChange={handleDate}
          required
        />
        <label htmlFor="reservation-date-optional">
          Alternative Reservation Date:
        </label>
        <input
          type="datetime-local"
          id="reservation-date-optional"
          name="reservation-date-optional"
          value={dateOptional}
          onChange={handleDateOptional}
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
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        />
        <input type="submit" value="Submit" id="reservation-button" />
      </form>
    </section>
  );
}
