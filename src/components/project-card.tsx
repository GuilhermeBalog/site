import React from 'react';

import ExternalLink from './external-link.js';
import { Project } from '../lib/convertRepoToProject.js';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="project-card" itemScope itemType="https://schema.org/SoftwareSourceCode">
      {project.image &&
        <a
          href={project.homepage || project.repo_url}
          title={project.name}
          className="project-card__thumbnail-link"
        >
          <img
            src={project.image}
            alt={project.name}
            className="project-card__thumbnail"
            loading="lazy"
            itemProp="thumbnailUrl"
          />
        </a>
      }

      <div className="project-card__body">
        <h3 className="project-card__title">
          <a href={project.homepage || project.repo_url} >
            <span itemProp="name" data-emoji={project.emoji}>
              {project.name}
            </span>
          </a>
        </h3>

        <p className="project-card__description" itemProp="description">
          {project.description}
        </p>

        <ul className="project-card__tags" itemProp="keywords">
          {project.languages.map((language, i) =>
            <li className="badge" key={language.name}>
              {language.name}{i !== project.languages.length - 1 && <span className="hide">,</span>}
            </li>
          )}
        </ul>

        {project.languages[0] && <meta itemProp="programmingLanguage" content={project.languages[0].name} />}

        <div className="project-card__actions">
          {project.homepage && project.homepage !== project.repo_url &&
            <a
              href={project.homepage}
              className="project-card__link"
              itemProp="url"
              data-emoji="🔗"
            >
              Acesse
            </a>
          }

          <ExternalLink
            href={project.repo_url}
            className="project-card__link"
            itemProp="codeRepository"
            data-emoji="💻"
          >
            Código fonte
          </ExternalLink>
        </div>
      </div>
    </li>
  );
}
