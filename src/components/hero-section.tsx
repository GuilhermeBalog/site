import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-section__image-container">
        <img
          src="assets/guilhermebalog.png"
          width="498"
          height="490"
          alt="Uma imagem de Guilherme Balog com ícones do Node.js, Heroku, React e Java"
          title="Uma imagem de Guilherme Balog com ícones do Node.js, Heroku, React e Java"
          className="hero-section__image"
          itemProp="image"
        />

        <img
          src="assets/nodejs.svg"
          alt="Ícone de Nodejs"
          className="hero-section__image-icon"
        />
        <img
          src="assets/react.svg"
          alt="Ícone de React"
          className="hero-section__image-icon"
        />
        <img
          src="assets/heroku.svg"
          alt="Ícone de Heroku"
          className="hero-section__image-icon"
        />
        <img
          src="assets/java.svg"
          alt="Ícone de Java"
          className="hero-section__image-icon"
        />
      </div>

      <div>
        <h1 className="hero-section__name" itemProp="name">
          <span itemProp="givenName">Guilherme</span> <span itemProp="familyName">Balog</span>
        </h1>

        <h2 className="hero-section__job-title" itemProp="jobTitle">
          Desenvolvedor <span className="hero-section__job-title-variant">de Software</span>
        </h2>

        <p className="hero-section__description" itemProp="description">
          Crio soluções tecnológicas para problemas reais, e alguns inventados também!
        </p>

        <a href="#projects" className="hero-section__cta">
          Conheça meu trabalho
        </a>

        <nav className="hero-section__social-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/guilhermebalog"
            className="hero-section__social-link"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GuilhermeBalog"
            className="hero-section__social-link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </section>
  );
}
