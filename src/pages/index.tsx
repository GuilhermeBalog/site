import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'

import { Project } from '../lib/convertRepoToProject.js';
import { WorkExperience } from '../lib/getWork.js';
import { EducationExperience } from '../lib/getEducation.js';
import { emojiFavicon } from '../lib/emojiFavIcon.js';

import Metadata from '../partials/metadata.js';
import Style from '../partials/style.js';
import Script from '../partials/script.js';
import HeroSection from '../partials/hero-section.js';
import ProjectsSection from '../partials/projects-section.js';
import WorkSection from '../partials/work-section.js';
import EducationSection from '../partials/education-section.js';
import ContactSection from '../partials/contact-section.js';
import Footer from '../partials/footer.js';

interface PageProps {
  projects: Project[],
  work: WorkExperience[],
  education: EducationExperience[]
}

function Main({ projects, work, education }: PageProps) {
  return (
    <>
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href={emojiFavicon()} />

          <link rel="preconnect" href="https://repository-images.githubusercontent.com" crossOrigin="" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

          <Metadata />
          <Style />
        </head>

        <body>
          <main itemScope itemType="https://schema.org/Person">
            <HeroSection />
            <ProjectsSection projects={projects} />
            <WorkSection work={work} />
            <EducationSection education={education} />
            <ContactSection />
            <Footer />
          </main>

          <Script />
        </body>
      </html>
    </>
  );
}

export function buildPage(props: PageProps) {
  const doctype = `<!doctype html>`;
  const documentHtml = renderToStaticMarkup(<Main {...props} />);

  return `${doctype}${documentHtml}`
}
