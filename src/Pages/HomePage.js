import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ParticleBackground from '../Particles/ParticleBackground'

function HomePage() {
    return (
        <div className="HomePage">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: .4 }} exit={{ opacity: 0 }}>

                <div className="animate-container">
                    <header className="hero">
                        <h1 className="hero-text">
                            Hi there! My name is
                            <span> Kyle Huynh</span>
                        </h1>
                        <p className="hero-sub-text">
                            I like making software and hitting buttons.
                        </p>

                        <div className="icons">
                            < a href="https://github.com/kylevh" className="icon-holder" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="icon gh" />
                            </a>
                            < a href="https://www.linkedin.com/in/kylevhuynh/" className="icon-holder" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                            </a>
                            < a href="https://www.behance.net/kylehuynh" className="icon-holder" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faBehance} className="icon be" />
                            </a>

                        </div>

                    </header>

                </div>

            </motion.div>
        </div>
    )
}

export default HomePage
