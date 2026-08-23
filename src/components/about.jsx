function About() {
  return (
    <section className="about">
      <div className="about-intro">
        <p className="eyebrow">Dal 2020, a Parma</p>
        <h1>La storia di Lievito</h1>
        <p>
          Lievito nasce da un'idea semplice: partire dalla pizza italiana più
          amata e renderla ancora più leggera, curata e contemporanea.
        </p>
      </div>

      <div className="story-grid">
        <article>
          <span>01</span>
          <h2>L'impasto</h2>
          <p>Lasciamo riposare l'impasto a lungo per ottenere una pizza soffice e fragrante.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Gli ingredienti</h2>
          <p>Scegliamo prodotti stagionali e fornitori che conosciamo personalmente.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Il tavolo</h2>
          <p>Vogliamo un luogo informale, dove condividere una buona pizza senza fretta.</p>
        </article>
      </div>

      <div className="about-closing">
        <p>Tradizione, ricerca e semplicità: questa è la nostra idea di pizza.</p>
      </div>
    </section>
  );
}

export default About;
