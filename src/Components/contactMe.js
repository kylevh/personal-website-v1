import React from 'react'

function contactMe() {
    return (
        <div className="contactMe">
            <header className="hero">
                <h1 className="hero-text">
                    Get in touch with me
                </h1>
                <p className="hero-sub-text" >
                    I'm currently looking for internship oppurtunities in the field of Software Engineering for Summer 2022.
                    Feel free to contact me with any questions!
                </p><br/>
            </header>


            <a href class="email-link" href="mailto:kylevh@outlook.com">
                <button className="btn-contact">Contact me</button>
            </a>
        </div>
    )
}

export default contactMe
