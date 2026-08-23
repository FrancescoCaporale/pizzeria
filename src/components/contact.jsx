function Contact() {
  return (
    <section className="contact">
      <div className="section-heading">
        <p className="eyebrow">Prenota il tuo tavolo</p>
        <h1>Vieni a trovarci</h1>
        <p>Una cena veloce, una serata tra amici o una pizza da condividere.</p>
      </div>

      <div className="contact-grid">
        <article>
          <h2>Dove siamo</h2>
          <p>Via Roma 25<br />43121 Parma, PR</p>
          <a href="https://maps.google.com/?q=Via+Roma+25+Parma" target="_blank" rel="noreferrer">Apri la mappa</a>
        </article>
        <article>
          <h2>Orari</h2>
          <p>Martedì – Giovedì: 18:30 – 23:00<br />Venerdì – Domenica: 18:30 – 23:30<br />Lunedì: chiuso</p>
        </article>
        <article>
          <h2>Contattaci</h2>
          <p><a href="tel:+390521123456">+39 0521 123456</a><br /><a href="mailto:ciao@lievitopizza.it">ciao@lievitopizza.it</a></p>
          <p>Per gruppi da 6 persone consigliamo di prenotare.</p>
        </article>
      </div>
    </section>
  );
}

export default Contact;
