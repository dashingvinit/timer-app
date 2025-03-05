import { Link, useLocation } from "react-router-dom";
import ToggleTheme from "./toggleTheme";
import "../css/navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Timer
      </Link>
      <Link
        to="/stopwatch"
        className={location.pathname === "/stopwatch" ? "active" : ""}
      >
        Stopwatch
      </Link>
      <ToggleTheme />
    </nav>
  );
}

export default Navbar;
