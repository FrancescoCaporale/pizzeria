import { useEffect, useState } from "react";
import PizzaList from "../components/pizzalist";

function MenuPage() {
  const [searchText, setSearchText] = useState("");
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzas(data))
      .catch(() => setPizzas([]))
      .finally(() => setIsLoading(false));
  }, []);

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
      {isLoading ? <p className="empty-message">Caricamento menu...</p> : <PizzaList pizzas={filteredPizzas} />}
    </section>
  );
}

export default MenuPage;
