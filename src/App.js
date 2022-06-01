import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Bands from "./pages/Bands";
import Program from "./pages/Program";
import BuyTicket from "./pages/BuyTicket";

export default function App() {
  return (
    <div id="App">
      <header>
        <nav>
          <Link to="/">
            <img src={require("./images/logo.png")} alt="logo" />
          </Link>
          <Link to="/bands">Bands</Link>
          <Link to="/program">Program</Link>
          <Link to="/buyticket">Køb Billet</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bands" element={<Bands />} />
        <Route path="/program" element={<Program />} />
        <Route path="/buyticket" element={<BuyTicket />} />
      </Routes>
    </div>
  );
}
