import "./EducationCard.css";

function EducationCard({ className = "" }) {
  const cardClassName = `education-card ${className}`.trim();

  return (
    <article className={cardClassName}>
      <div className="education-card__icon" aria-hidden="true">
        <span className="education-card__icon-part education-card__icon-part--top" />
        <span className="education-card__icon-part education-card__icon-part--base" />
        <span className="education-card__icon-part education-card__icon-part--tassel" />
      </div>
      <p className="education-card__label">Education</p>
      <h3 className="education-card__title">Bachelor of Engineering</h3>
      <p className="education-card__school">Faculty of Engineering</p>
      <p className="education-card__school">Menoufia University, Egypt</p>
      <div className="education-card__rule" />
      <p className="education-card__note">
        A technical foundation for solving complex problems with structure and
        persistence.
      </p>
    </article>
  );
}

export default EducationCard;
