import React from 'react'
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img-holder">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span> Lorem Ipsum</span></h4>
                <p className="about-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero corporis laboriosam perspiciatis consequuntur a.
                    Rem magnam laboriosam adipisci, quaerat exercitationem minima distinctio labore debitis, eius est dicta, nisi
                    consectetur mollitia.
                </p>
                <div className="about-details">
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
                </div>

                <button className="btn">Download Resume</button>
            </div>
        </div>
    )
}

export default ImageSection
