import React from "react";
import { FaStackOverflow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Created By Constantin©</h2>
      <p>
        <ul>
          <a href="https://github.com/c0nstantin1990">
            <li className="logo">
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/constantin-constantinov-37906227a/">
            <li className="logo">
              <FaLinkedin />
            </li>
          </a>
          <a href="https://stackoverflow.com/users/22506176/constantin-constantinov">
            <li className="logo">
              <FaStackOverflow />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
