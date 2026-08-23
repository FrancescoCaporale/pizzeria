import { useState } from "react";
import pizzas from "../data/pizzas";
import PizzaList from "../components/pizzalist";

function MenuPage() {
  const [searchText, setSearchText] = useState("");

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="menu">
      <div className="section-heading">
        <p className="eyebrow">Il nostro menu</p>
        <h1>Le nostre pizze</h1>
        <p>Cerca la pizza che preferisci tra le nostre proposte.</p>
      </div>
      <label className="search" htmlFor="pizza-search">
        Cerca una pizza
        <input
          id="pizza-search"
          type="search"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Es. Margherita"
        />
      </label>
      <PizzaList pizzas={filteredPizzas} />
    </section>
  );
}

export default MenuPage;
