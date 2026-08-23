function PizzaList({ pizzas }) {
  if (pizzas.length === 0) {
    return <p className="empty-message">Nessuna pizza trovata.</p>;
  }

  return (
    <div className="pizza-container">
      {pizzas.map((pizza) => (
        <article className="pizza-card" key={pizza.id}>
          <h3>{pizza.name}</h3>
          <p>{pizza.description}</p>
          <span>€ {pizza.price.toFixed(2)}</span>
        </article>
      ))}
    </div>
  );
}

export default PizzaList;
