import "./App.css";

function App() {
  return (
    <>
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
            <div className="pizza-card">
              <h3>Margherita</h3>
              <p>Pomodoro, fiordilatte e basilico</p>
              <span>€8</span>
            </div>

            <div className="pizza-card">
              <h3>Diavola</h3>
              <p>Pomodoro, fiordilatte e salame piccante</p>
              <span>€10</span>
            </div>

            <div className="pizza-card">
              <h3>Bufalina</h3>
              <p>Pomodoro, mozzarella di bufala e basilico</p>
              <span>€11</span>
            </div>
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