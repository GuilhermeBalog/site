import React from "react"

import ProjectCard from "./project-card.js";
import { Project } from "../lib/convertRepoToProject.js";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects">
      <h2 data-emoji="🛠">Projetos</h2>

      <ul className="projects">
        {projects.map(project =>
          <ProjectCard
            key={project.repo_url}
            project={project}
          />
        )}
      </ul>
    </section>
  );
}
