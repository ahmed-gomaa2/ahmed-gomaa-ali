import { projects } from "../../data/portfolioData";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects app__section" id="projects">
      <div className="projects__header">
        <SectionHeading
          className="projects__section-heading"
          label="03 / Selected work"
        >
          Projects that tell
          <br />
          the full story.
        </SectionHeading>
        <p className="projects__introduction">
          A growing collection of shipped pages and applications. Open each
          gallery to see captured screens from the live experience.
        </p>
      </div>

      <div className="projects__cards">
        {projects.map((project) => (
          <ProjectCard
            {...project}
            className="projects__card"
            key={project.number}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
