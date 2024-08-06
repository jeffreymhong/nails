import { useState } from "react";
import Header from "./partials/Header/";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Footer from "./partials/Footer";

export default function App() {
  const [page, setPage] = useState("Home");
  return (
    <div>
      <Header setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "Service" && <Service />}
      {page === "Reservation" && <Reservation />}
      {page === "About" && <Service />}
      <Footer />
    </div>
  );
}
