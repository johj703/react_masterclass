import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <Link to={"/"}>Home</Link>
      </ul>
      <ul>
        <Link to={"/about"}>About</Link>
      </ul>
    </header>
  );
}

export default Header;
