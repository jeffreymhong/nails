import { useState } from "react";
import Header from "./partials/Header/";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Footer from "./partials/Footer";

export default function App(props) {
  return (
    <div>
      <Header />
      {props.page === "Home" && <Home />}
      {props.page === "Service" && <Service />}
      {props.page === "Reservation" && <Reservation />}
      {props.page === "About" && <About />}
      <Footer />
    </div>
  );
}
