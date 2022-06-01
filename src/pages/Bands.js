import { useState, useEffect } from "react";

import BandList from "../components/bands/BandList";

export default function Bands() {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    async function getBands() {
      const res = await fetch("https://foofestrabbia.herokuapp.com/bands");
      const data = await res.json();
      setBands(data);
    }
    getBands();
  }, []);

  return (
    <div>
      <h1>Bands</h1>
      <BandList bands={bands} />
    </div>
  );
}
