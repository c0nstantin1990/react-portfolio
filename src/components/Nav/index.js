import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav({ currentTab, handleTabChange }) {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  const tabs = [
    { name: "About Me", label: "About Me" },
    { name: "Portfolio", label: "Portfolio" },
    { name: "Contact", label: "Contact" },
    { name: "Resume", label: "Resume" },
  ];

  return (
    <nav>
      <ul className="nav nav-tabs">
        {tabs.map(({ name, label }) => (
          <li className="nav-item" key={name}>
            <a
              href={`#${name.toLowerCase()}`}
              onClick={() => handleTabChange(name)}
              className={`nav-link ${currentTab === name ? "active" : ""}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
