import React from "react"

import ExternalLink from "./external-link.js";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <strong className="footer__title">
        Guilherme Balog Gardino, {new Date().getFullYear()}.
      </strong>

      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__list-item">
            <ExternalLink
              href="https://www.linkedin.com/in/guilhermebalog"
              className="footer__link"
            >
              LinkedIn
            </ExternalLink>
          </li>

          <li className="footer__list-item">
            <ExternalLink
              href="https://github.com/GuilhermeBalog"
              className="footer__link"
            >
              GitHub
            </ExternalLink>
          </li>

          <li className="footer__list-item">
            <a href="#hero" className="footer__link">
              Voltar ao topo
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
