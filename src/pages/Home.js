import { Link } from "react-router-dom";
// import logo from "../images/logo.png";

// console.log(logo);

export default function Home() {
  return (
    <section>
      <img src={require("../images/logo.png")} alt="logo" />
      <h1>FooFest!</h1>
      <h4>18 - 17 Juli</h4>
      <Link to="/buyticket">Køb Billet</Link>
      {/* missing pic */}
    </section>
  );
}
