import { getGalleryLink } from "../../utils/paths";
import "./ProjectCard.css";

function GalleryIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16v12H4z" />
      <path d="M8 7l1.5-2h5L16 7" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

function LiveSiteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.1 2.2 3.2 4.9 3.2 8s-1.1 5.8-3.2 8" />
      <path d="M12 4c-2.1 2.2-3.2 4.9-3.2 8s1.1 5.8 3.2 8" />
    </svg>
  );
}

function ProjectCard({
  className = "",
  coverImage,
  coverPosition,
  description,
  galleryPath,
  liveUrl,
  number,
  tags,
  title,
  tone,
  type,
}) {
  const cardClassName = `project-card project-card--${tone} ${className}`.trim();
  const galleryLink = getGalleryLink(galleryPath);

  return (
    <article
      className={cardClassName}
      style={{
        "--project-card-cover-position": coverPosition || "center top",
      }}
    >
      <a
        className="project-card__preview"
        href={galleryLink}
        aria-label={`Open ${title} gallery`}
      >
        <img
          className="project-card__preview-image"
          src={coverImage}
          alt=""
          loading="eager"
          decoding="async"
        />
        <span className="project-card__number">{number}</span>
        <span className="project-card__gallery-badge">
          <GalleryIcon />
          Gallery
        </span>
      </a>

      <div className="project-card__content">
        <p className="project-card__category">{type}</p>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tags">
          {tags.map((tag) => (
            <span className="project-card__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          <a className="project-card__action" href={galleryLink}>
            <GalleryIcon />
            View gallery
          </a>
          {liveUrl && (
            <a
              className="project-card__action project-card__action--live"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <LiveSiteIcon />
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
