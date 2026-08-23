import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Pizza contemporanea</p>
        <h1>Il gusto della semplicità.</h1>
        <p className="hero-text">Impasti leggeri, ingredienti scelti e tanta passione.</p>
        <Link className="button" to="/menu">Scopri il menu</Link>
      </div>
    </section>
  );
}

export default Hero;
