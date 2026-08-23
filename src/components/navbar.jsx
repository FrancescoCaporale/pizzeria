import { NavLink } from "react-router-dom";
import logoMark from "../assets/brand/lievito-mark.png";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <NavLink className="logo" to="/">
          <img src={logoMark} alt="" />
          <span>Lievito</span>
        </NavLink>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/chi-siamo">Chi siamo</NavLink></li>
          <li><NavLink to="/contatti">Contatti</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
