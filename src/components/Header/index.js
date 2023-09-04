import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Constantin's Portfolio</h1>
          </div>
          <div>
            <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
          <h2>Welcome</h2>
          <p>
            {" "}
            Here, you'll find a showcase of my projects, skills, and journey in
            the world of web development.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;
