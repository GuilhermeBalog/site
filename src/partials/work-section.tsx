import React from "react"

import { WorkExperience } from "../lib/getWork.js";
import ExperienceItem from "../components/experience-item.js";

export default function WorkSection({ work }: { work: WorkExperience[] }) {
  return (
    <section id="work">
      <h2 data-emoji="💼">Experiência Profissional</h2>

      <div className="experience-card-list">
        {work.map(experience => <ExperienceItem
          {...experience}
          key={experience.company}
          image={{ ...experience.image, alt: experience.company }}
          cardProps={{
            itemProp:"memberOf",
            itemScope: true,
            itemType: "https://schema.org/EmployeeRole"
          }}
          title={experience.company}
          titleProps={{
            itemProp:"memberOf",
            itemScope: true,
            itemType:"https://schema.org/Organization"
          }}
          titleSpanProps={{ itemProp:"name" }}
          subtitle={experience.title}
          subtitleProps={{ itemProp: "roleName" }}
        />)}
      </div>
    </section>
  );
}
