import { useState } from "react";
import "./App.css";
import pizzas from "./data/pizzas";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import PizzaList from "./components/pizzalist";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [searchText, setSearchText] = useState("");

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="menu" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Il nostro menu</p>
            <h2>Le nostre pizze</h2>
            <p>Cerca la pizza che preferisci tra le nostre proposte.</p>
          </div>
          <label className="search" htmlFor="pizza-search">
            Cerca una pizza
            <input id="pizza-search" type="search" value={searchText}
              onChange={(event) => setSearchText(event.target.value)} placeholder="Es. Margherita" />
          </label>
          <PizzaList pizzas={filteredPizzas} />
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
