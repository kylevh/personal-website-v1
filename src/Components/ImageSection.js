import React from "react";
import about from "../img/about.jpg";
import { Link } from "react-router-dom";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img-holder">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am a<span> Software Engineer</span>
        </h4>
        <p className="about-text">
          I'm currently an undergraduate in my third year studying Computer
          Science and Software Engineering at the{" "}
          <span>University of Washington Bothell</span>.
        </p>
        <p className="about-text-2">
          I work as a web assistant for the UW Department of Lab Medicine and
          manage the the Husky Game Dev Club as vice-president, which is
          dedicated to teaching students the process of game development and
          coding.
        </p>
        <p className="about-text-2">
          Outside of programming, I enjoy doing graphic design, kendo, film
          photography, and cooking.
        </p>

        {/* <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Country</p>
                        <p>School</p>
                        <p>Major</p>
                    </div>
                    <div className="right-section">
                        <p>: Kyle Huynh</p>
                        <p>: 20</p>
                        <p>: USA</p>
                        <p>: University of Washington Bothell</p>
                        <p>: Computer Science and Software Engineering</p>
                    </div>
                </div> */}
        <Link to="/kvh_resume.pdf" target="_blank" download>
          <button className="btn">Download Resume</button>
        </Link>
      </div>
    </div>
  );
}

export default ImageSection;
