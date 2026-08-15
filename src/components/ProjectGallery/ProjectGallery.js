import "./ProjectGallery.css";

function ProjectGallery({ project }) {
  const isPhoneGallery = project.galleryLayout === "phone";
  const hasLiveProject = Boolean(project.liveUrl);
  const galleryClassName = isPhoneGallery
    ? "project-gallery app__section project-gallery--phone"
    : "project-gallery app__section";
  const screenshotsButtonClassName = hasLiveProject
    ? "project-gallery__button"
    : "project-gallery__button project-gallery__button--primary";

  function scrollToScreenshots() {
    document.getElementById("screenshots")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className={galleryClassName}>
      <div
        className="project-gallery__hero"
        style={{
          "--gallery-cover": `url(${project.coverImage})`,
          "--gallery-cover-position": project.coverPosition || "center",
        }}
      >
        <div className="project-gallery__hero-content">
          <a className="project-gallery__back-link" href="#projects">
            Back to projects
          </a>
          <p className="project-gallery__category">{project.type}</p>
          <h1 className="project-gallery__title">{project.title}</h1>
          <p className="project-gallery__description">
            {project.description}
          </p>
          <div className="project-gallery__actions">
            {hasLiveProject && (
              <a
                className="project-gallery__button project-gallery__button--primary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit live project
              </a>
            )}
            <button
              className={screenshotsButtonClassName}
              type="button"
              onClick={scrollToScreenshots}
            >
              View screenshots
            </button>
          </div>
        </div>
      </div>

      <div className="project-gallery__screenshots-header" id="screenshots">
        <p className="project-gallery__screenshots-count">
          {String(project.screenshots.length).padStart(2, "0")} screenshots
        </p>
        <h2 className="project-gallery__screenshots-title">
          A guided look through the project.
        </h2>
      </div>

      <div className="project-gallery__screenshots">
        {project.screenshots.map((screenshot, index) => {
          const isPhoneScreenshot = screenshot.layout === "phone";
          const screenshotClassName = isPhoneScreenshot
            ? "project-gallery__screenshot project-gallery__screenshot--phone"
            : "project-gallery__screenshot";
          const fallbackCaption = `Screen ${String(index + 1).padStart(
            2,
            "0"
          )}`;

          return (
            <figure className={screenshotClassName} key={screenshot.src}>
              <img
                className="project-gallery__screenshot-image"
                src={screenshot.src}
                alt={screenshot.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <figcaption className="project-gallery__screenshot-caption">
                {screenshot.caption || fallbackCaption}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectGallery;
