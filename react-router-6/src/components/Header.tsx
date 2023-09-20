import { Link } from "react-router-dom";

function Header() {
  return (
    <h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </h1>
  );
}
