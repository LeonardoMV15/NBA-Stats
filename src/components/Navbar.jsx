import { NavLink } from "react-router-dom";
import DayNightToggle from "./DayNightToggle";
import "../styles/navbar.css";

function NavBar({ dark, onToggle }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink className="navbar__brand" to="/" aria-label="NBA Stats home">
          <span className="navbar__wordmark">
            <strong>NBA STATS</strong>
          </span>
        </NavLink>

        <nav className="navbar__nav" aria-label="Main navigation">
          <NavLink
            to="/about"
            className="navBar-link"
          >
            About the archive
          </NavLink>
        </nav>

        <div className="navbar__theme-switch">
          <DayNightToggle dark={dark} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
