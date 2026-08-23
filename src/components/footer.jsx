import { Link } from "react-router-dom";
import logoMark from "../assets/brand/lievito-mark.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <Link className="footer-logo" to="/">
            <img src={logoMark} alt="" />
            <span>Lievito</span>
          </Link>
          <p>Pizza contemporanea, a Parma.</p>
        </div>
        <div>
          <p className="footer-title">Esplora</p>
          <Link to="/menu">Menu</Link>
          <Link to="/chi-siamo">Chi siamo</Link>
          <Link to="/contatti">Contatti</Link>
        </div>
        <div>
          <p className="footer-title">Seguici</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Lievito — Pizza Contemporanea</div>
    </footer>
  );
}

export default Footer;
