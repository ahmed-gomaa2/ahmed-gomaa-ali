import "./Contact.css";

function Contact() {
  return (
    <section className="contact app__section" id="contact">
      <p className="contact__label">04 / Contact</p>
      <div className="contact__layout">
        <div className="contact__heading">
          <p className="contact__kicker">Have a project in mind?</p>
          <h2 className="contact__title">
            Let's make it
            <br />
            work beautifully.
          </h2>
        </div>

        <div className="contact__details">
          <p className="contact__description">
            I'm open to conversations about React development, web applications,
            and opportunities to build something worthwhile.
          </p>
          <a
            className="contact__email-button"
            href="mailto:ahmedgomaaofficial97@gmail.com"
          >
            <span className="contact__email-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6.5h18v12H3z" />
                <path d="m3.5 7 8.5 6 8.5-6" />
              </svg>
            </span>
            <span className="contact__email-copy">
              <small className="contact__email-label">Send me an email</small>
              ahmedgomaaofficial97@gmail.com
            </span>
            <svg className="contact__arrow" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
