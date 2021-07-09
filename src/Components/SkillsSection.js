import React from 'react'

function SkillsSection({ skill, progress, width }) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">
                    <ul>
                        <li className="skill-list">{skill}</li>
                    </ul>
                </h5>
                <div className="skill-bar">
                </div>

            </div>
        </div>
    )
}

export default SkillsSection
