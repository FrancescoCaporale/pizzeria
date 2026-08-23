import "./App.css";
import pizzas from "./data/pizzas";
import navbar from "./components/navbar";
import hero from "./components/hero";

function App() {
  return (
    <>
      <navbar />
      <hero />
      <header>
        <nav>
          <h1>Lievito</h1>

          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Chi siamo</li>
            <li>Contatti</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p>Pizza contemporanea</p>
            <h2>Il gusto della semplicità.</h2>
            <button>Scopri il menu</button>
          </div>
        </section>

        <section className="menu">
          <h2>Le nostre pizze</h2>

          <div className="pizza-container">
            {pizzas.map((pizza) => (
              <div className="pizza-card" key={pizza.id}>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <span>€{pizza.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <h2>Chi siamo</h2>
          <p>
            Lievito nasce dalla passione per la pizza e dalla voglia di
            reinterpretare la tradizione con ingredienti semplici e di qualità.
          </p>
        </section>

        <section className="contact">
          <h2>Vieni a trovarci</h2>
          <p>Via Roma 25, Parma</p>
          <p>Martedì - Domenica: 18:30 - 23:30</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Lievito - Pizza Contemporanea</p>
      </footer>
    </>
  );
}

export default App;