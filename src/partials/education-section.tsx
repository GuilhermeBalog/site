import React from "react"

import ExperienceItem from "../components/experience-item.js";
import { EducationExperience } from "../lib/getEducation.js";

export default function EducationSection({ education }: { education: EducationExperience[] }) {
  return (
    <section id="education">
      <h2 data-emoji="🎓">Formação Acadêmica</h2>

      <div className="experience-card-list">
        {education.map(experience => <ExperienceItem
          {...experience}
          key={experience.title}
          image={{ ...experience.image, alt: experience.school }}
          cardProps={{
            itemProp: "alumniOf",
            itemScope: true,
            itemType: "https://schema.org/OrganizationRole"
          }}
          title={experience.title}
          titleProps={{ itemProp: "roleName" }}
          subtitle={experience.school}
          subtitleProps={{
            itemProp: "alumniOf",
            itemScope: true,
            itemType: "https://schema.org/EducationalOrganization"
          }}
          subtitleSpanProps={{ itemProp: "name" }}
        />)}
      </div>
    </section>
  );
}
