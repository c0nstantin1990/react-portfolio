import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <h2>Created By Constantin©</h2>
      <p>
        <ul>
          <a href="https://github.com/c0nstantin1990">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/constantin-constantinov-37906227a/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
