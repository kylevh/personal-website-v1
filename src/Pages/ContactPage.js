import React from 'react'
import Contact from '../Components/contactMe';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div className="ContactPage">
            <Title span={"Contact"} title={"Contact"} />
            <Contact />
        </div>
    )
}

export default ContactPage
