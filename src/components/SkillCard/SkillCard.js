import "./SkillCard.css";

function SkillIcon({ icon }) {
  if (icon === "frameworks") {
    return (
      <span
        className="skill-card__icon skill-card__icon--frameworks"
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48">
          <rect x="9" y="9" width="13" height="13" rx="3" />
          <rect x="26" y="9" width="13" height="13" rx="3" />
          <rect x="9" y="26" width="13" height="13" rx="3" />
          <rect x="26" y="26" width="13" height="13" rx="3" />
        </svg>
      </span>
    );
  }

  if (icon === "state") {
    return (
      <span
        className="skill-card__icon skill-card__icon--state"
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48">
          <path d="M16 16h16M16 32h16M16 16l16 16M32 16 16 32" />
          <circle cx="16" cy="16" r="5" />
          <circle cx="32" cy="16" r="5" />
          <circle cx="16" cy="32" r="5" />
          <circle cx="32" cy="32" r="5" />
        </svg>
      </span>
    );
  }

  if (icon === "backend") {
    return (
      <span
        className="skill-card__icon skill-card__icon--backend"
        aria-hidden="true"
      >
        <svg viewBox="0 0 48 48">
          <ellipse cx="24" cy="13" rx="14" ry="6" />
          <path d="M10 13v22c0 3.3 6.3 6 14 6s14-2.7 14-6V13" />
          <path d="M10 24c0 3.3 6.3 6 14 6s14-2.7 14-6" />
        </svg>
      </span>
    );
  }

  return (
    <span
      className="skill-card__icon skill-card__icon--frontend"
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48">
        <rect x="8" y="11" width="32" height="24" rx="4" />
        <path d="M18 20l-5 4 5 4M30 20l5 4-5 4M26 18l-4 12" />
      </svg>
    </span>
  );
}

function SkillCard({ className = "", description, icon, number, skills, title }) {
  const cardClassName = `skill-card ${className}`.trim();

  return (
    <article className={cardClassName}>
      <div className="skill-card__top">
        <span className="skill-card__number">{number}</span>
        <SkillIcon icon={icon} />
      </div>
      <h3 className="skill-card__title">{title}</h3>
      <p className="skill-card__description">{description}</p>
      <div className="skill-card__tags">
        {skills.map((skill) => (
          <span className="skill-card__tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;
