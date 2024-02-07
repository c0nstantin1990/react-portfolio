import React from "react";
import myResume from "../../assets/Resume/Resume.pdf";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

function Resume() {
  return (
    <div id="resume-back">
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <FaFileDownload />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <FaHtml5 />
              </li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          <p className="column-title">Back-End</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <FaNodeJs />
              </li>
              <li>APIs</li>
              <li>Node.Js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Mongodb</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
