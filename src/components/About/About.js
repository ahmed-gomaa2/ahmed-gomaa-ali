import EducationCard from "../EducationCard/EducationCard";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./About.css";

function About() {
  return (
    <section className="about app__section" id="about">
      <SectionHeading className="about__heading" label="01 / About">
        Engineering mindset.
        <br />
        Human-centered results.
      </SectionHeading>

      <div className="about__content">
        <div className="about__copy">
          <p className="about__lead">
            I enjoy taking an application from an early idea to an interface
            that feels clear, fast, and dependable.
          </p>
          <p className="about__paragraph">
            My engineering background shapes how I work: understand the problem,
            break it into useful parts, and build with care. Across front-end and
            back-end technologies, I focus on creating products that make sense
            to both users and developers.
          </p>
        </div>
        <EducationCard className="about__education" />
      </div>
    </section>
  );
}

export default About;
