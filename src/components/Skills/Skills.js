import { skillGroups } from "../../data/portfolioData";
import SectionHeading from "../SectionHeading/SectionHeading";
import SkillCard from "../SkillCard/SkillCard";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills app__section" id="skills">
      <SectionHeading
        className="skills__heading"
        label="02 / Expertise"
        theme="light"
      >
        The tools behind
        <br />
        the experience.
      </SectionHeading>

      <div className="skills__cards">
        {skillGroups.map((group) => (
          <SkillCard {...group} className="skills__card" key={group.title} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
