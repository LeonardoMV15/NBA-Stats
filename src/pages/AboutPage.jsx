import "../styles/about-page.css";

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page__intro">
        <p className="about-page__eyebrow">ABOUT ME · BASKETBALL & CODE</p>
        <h1>
          Basketball and code.
          <br />
          <span>Two passions, one mindset.</span>
        </h1>
        <p className="about-page__lead">
          I’m a basketball lover and player, as well as a developer passionate
          about creating and learning.
        </p>
      </section>

      <section className="about-page__content" aria-label="About me">
        <article className="about-page__card">
          <span className="about-page__number">01 / THE COURT</span>
          <h2>Basketball is part of who I am</h2>
          <p>
            I love basketball and play whenever I can. The discipline, teamwork,
            and drive to improve that I find on the court also shape the way I
            approach programming.
          </p>
        </article>

        <article className="about-page__card">
          <span className="about-page__number">02 / THE CODE</span>
          <h2>Curious since childhood</h2>
          <p>
            I’ve been interested in technology since I was young: understanding
            how things work and discovering what can be built with it. I trained
            at Ironhack, and I’m still building my path as a developer.
          </p>
        </article>
      </section>

      <blockquote className="about-page__quote">
        “Every day is another opportunity to learn something new.”
      </blockquote>
    </main>
  );
}

export default AboutPage;