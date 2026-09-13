const companies = [
  "Google",
  "Ericsson",
  "ASML",
  "Rabobank",
  "Lenovo",
  "CI&T",
  "Samba Tech",
];

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="eyebrow">RODOLFOLABS · NETHERLANDS / CANADA / WORLDWIDE</div>
        <h1>
          I build digital products that <span>move your business forward.</span>
        </h1>
        <p>
          Senior full-stack engineer and AI builder turning complex ideas into expressive, reliable products — from first interaction to production.
        </p>
        <div className="actions">
          <a className="button primary" href="/career-check">Start your Tech Career Check</a>
          <a className="button" href="/community">Explore the community</a>
        </div>
      </section>

      <section className="shell companies-section" aria-labelledby="companies-heading">
        <div className="eyebrow" id="companies-heading">Worked with teams at:</div>
        <div className="company-list" aria-label="Companies Rodolfo has worked with">
          {companies.map((company) => (
            <span className="company-name" key={company}>{company}</span>
          ))}
        </div>
      </section>

      <section className="shell grid">
        <article className="card">
          <div className="kicker">AI</div>
          <h2>Build faster with intelligence.</h2>
          <p>Applied AI, automation, agents and practical experiments focused on real products and workflows.</p>
        </article>
        <article className="card">
          <div className="kicker">WEB</div>
          <h2>Software people want to use.</h2>
          <p>Modern web experiences, systems integration and full-cycle product engineering.</p>
        </article>
        <article className="card">
          <div className="kicker">CLOUD</div>
          <h2>From prototype to production.</h2>
          <p>Cloud, backend systems, DevOps, observability and reliable delivery.</p>
        </article>
      </section>

      <section className="shell career-banner">
        <div>
          <div className="eyebrow">RODOLFOLABS CAREER</div>
          <h2>Want to compete for international tech opportunities?</h2>
          <p>Discover where you are today, what may be holding you back, and what to work on next.</p>
        </div>
        <a className="button primary" href="/career-check">Take the free Career Check</a>
      </section>
    </main>
  );
}
