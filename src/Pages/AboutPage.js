import React from 'react'
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">

            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'Skills'} span={'Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML & CSS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Javascript (ES6+)'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node.js & Express.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Unity'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'C#'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Photoshop'} progress={'70%'} width={'70%'} />
            </div>
        </div>
    )
}

export default AboutPage
