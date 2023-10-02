import React from "react";
import carImage from "../../assets/Work/carImage.jpeg";
import frostImage from "../../assets/Work/frostImage.jpeg";
import mixImage from "../../assets/Work/mixImage.jpeg";
import noteImage from "../../assets/Work/noteImage.jpeg";
import weatherImage from "../../assets/Work/weatherImage.jpeg";
import schedulerImage from "../../assets/Work/schedulerImage.jpeg";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">My Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://mixmuse-b1c9f2067218.herokuapp.com/">
                {" "}
                <img
                  src={mixImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Blog Tech"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>MixMuse</h4>
              <p>
                This MERN full stack e-commerce web application is built with
                React and the open source JavaScript library Redux, which
                remains the industry standard for managing complex state in a
                large-scale React application. MixMuse is a scalable,
                user-focused MERN app that offers a wide range of bartending
                supplies such as liquor, equipment and mixers. Age verification
                is required to enter the site. The app leverages Redux's
                powerful capabilities to handle global state, ensuring a
                seamless shopping experience. The Redux store orchestrates data
                flow, while a Redux provider grants access to this central
                state. This architecture enables precise control over state
                changes and data extraction, ensuring that actions are
                dispatched effectively throughout the app.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://car-bidz-d6af66a79b60.herokuapp.com/">
                {" "}
                <img
                  src={carImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Cars"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Car Bidz</h4>
              <p>
                This application is a sophisticated online platform catering to
                automotive enthusiasts, providing seamless car bidding services.
                It facilitates user account creation, car listing, and secure
                bidding functionalities. Users can confidently showcase their
                vehicles, receive real-time highest bid updates, and enjoy
                automated bidding processes. The platform prioritizes user
                privacy and employs state-of-the-art security measures. With an
                intuitive interface and responsive design, our application
                offers a seamless and enjoyable experience for car buyers and
                sellers alike.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://create-a-note-abc3d1218ba1.herokuapp.com/">
                {" "}
                <img
                  src={noteImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Create A Note</h4>
              <p>
                This note-taking application seamlessly integrates with
                Express.js, utilizing API routes and the fs module to manage
                notes efficiently. Users can easily create, save, and delete
                notes, with an intuitive interface showcasing saved notes in the
                sidebar. The app employs API calls for smooth communication with
                the server, streamlining note management. Whether creating new
                notes or modifying existing ones, this app offers a
                user-friendly and efficient solution for organizing and
                accessing information.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://c0nstantin1990.github.io/Weather-Forecast/">
                {" "}
                <img
                  src={weatherImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Forecast</h4>
              <p>
                This weather application efficiently retrieves and displays
                current weather data and a 5-day forecast for cities. It employs
                jQuery for streamlined code and moment.js for accurate time and
                date representation. The user-friendly interface includes a
                search bar for city selection and dynamic HTML element creation.
                It also smartly manages local storage, only adding cities that
                exist. With responsive design using @media, it adapts seamlessly
                to various screen sizes, ensuring a smooth user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://c0nstantin1990.github.io/Work-Day-Scheduler/">
                {" "}
                <img
                  src={schedulerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Scheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler</h4>
              <p>
                The Dynamic Daily Planner, offers a sleek solution for efficient
                daily task management. Featuring a live header displaying the
                current day, month, and date, this app uses color-coded blocks
                to differentiate past, present, and future events. Save your
                tasks effortlessly with the built-in storage system, complete
                with informative messages. Easily update and manage your
                schedule as this app dynamically generates HTML elements,
                ensuring a seamless planning experience.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://c0nstantin1990.github.io/frost-bite/">
                {" "}
                <img
                  src={frostImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Frost Bite"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Frost Bite</h4>
              <p>
                The app is a user-friendly web application that allows users to
                search for weather information and discover nearby restaurants
                in a chosen city. By entering a city name, users can instantly
                view the current weather, including temperature, humidity, and
                wind speed. Additionally, the app uses the Zomato API to present
                a list of nearby restaurants with their names, images, and
                addresses, providing a convenient way for users to explore
                dining options. With a smooth user interface, the app ensures a
                seamless experience while helping users plan their outings based
                on both weather conditions and restaurant choices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
