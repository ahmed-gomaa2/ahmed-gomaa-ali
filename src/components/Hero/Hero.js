import CodeWindow from "../CodeWindow/CodeWindow";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero app__section" id="home">
      <div className="hero__copy">
        <p className="hero__eyebrow">
          <span className="hero__status-dot" />
          React.js application developer
        </p>
        <h1 className="hero__title">
          <span className="hero__title-line">I turn ideas into</span>
          <span className="hero__title-accent">
            polished web experiences.
          </span>
        </h1>
        <p className="hero__description">
          I'm Ahmed Gomaa, a developer focused on building responsive React
          applications with thoughtful interfaces, reliable state management,
          and solid back-end foundations.
        </p>
        <div className="hero__actions">
          <a className="hero__primary-link" href="#projects">
            Explore my work
            <svg className="hero__arrow" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
          <a
            className="hero__email-link"
            href="mailto:ahmedgomaaofficial97@gmail.com"
          >
            ahmedgomaaofficial97@gmail.com
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-label="Developer code illustration">
        <div className="hero__glow hero__glow--mint" />
        <div className="hero__glow hero__glow--coral" />
        <CodeWindow />
        <div className="hero__floating-tag hero__floating-tag--react">React</div>
        <div className="hero__floating-tag hero__floating-tag--redux">Redux</div>
      </div>

      <div className="hero__scroll">
        <span>Scroll to discover</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
