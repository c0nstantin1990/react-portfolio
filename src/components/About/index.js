import React from "react";
import profileImage from "../../assets/Profile/profile.jpeg";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <h1 id="about" className="section-title primary-border">
        About Me
      </h1>
      <div className="flex-row intro-info">
        <div className="intro-img">
          <img src={profileImage} style={{ width: "100%" }} alt="profile" />
        </div>
        <p>
          I am a good timekeeper, always willing to learn new skills. I am
          friendly, helpful and polite, have a good sense of humour. I am able
          to work independently in busy environments and also within a team
          setting. I am outgoing and tactful, and able to listen effectively
          when solving problems.I am an enthusiastic and determined professional
          with a recent background in computer science. My goal is to
          continuously learn and grow, embracing new technologies and best
          practices, as I strive to evolve into a seasoned developer, taking on
          more complex challenges along the way.
        </p>
      </div>
    </section>
  );
}

export default About;
