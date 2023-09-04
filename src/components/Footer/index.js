import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Made by Constantin ©</h2>
      <ul className="social-links">
        <li>
          <a href="https://github.com/c0nstantin1990" className="logo-link">
            <VscGithubAlt className="logo" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/constantin-constantinov-37906227a/"
            className="logo-link"
          >
            <AiOutlineLinkedin className="logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
