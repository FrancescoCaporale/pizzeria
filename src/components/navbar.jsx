function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <a className="logo" href="#top" aria-label="Lievito, torna all'inizio">Lievito</a>
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">Chi siamo</a></li>
          <li><a href="#contact">Contatti</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
