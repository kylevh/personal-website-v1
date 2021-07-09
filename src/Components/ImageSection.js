import React from 'react'
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img-holder">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am a<span> Software Engineer</span></h4>
                <p className="about-text">
                    I'm currently an undergraduate in my third year studying Computer Science and Software Engineering
                    at the <span>University of Washington Bothell</span>. My interest in programming started back in middle school
                    when I decided to try editing custom themes for my profile in a browser based MMO game. Who knew changing some
                    colors and images would teach me so much about HTML and CSS!
                </p>
                <p className="about-text-2">
                    Fast-forward to the present, I currently work as a web assistant for the UW Department of Lab Medicine and manage the
                    the Husky Game Dev Club which is dedicated to teaching students the process of game development and coding. I love creating
                    video games and participating in game jams as well as hackathons in my free time.
                </p>
                <p className="about-text-2">
                    Outside of programming, I enjoy going on hikes, playing the violin, graphic design, building keyboards, and gaming.

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
                <a href="../img/kvh_resume.docx" download>
                    <button className="btn">Download Resume</button>
                </a>
            </div>
        </div>
    )
}

export default ImageSection
