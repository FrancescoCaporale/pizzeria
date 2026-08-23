import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <NavLink className="logo" to="/">Lievito</NavLink>
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
