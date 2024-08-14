import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./partials/Header/";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./partials/Footer";

export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div id="app">
      <Header setMenu={setMenu} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact menu={menu} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
