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
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'NodeJS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'C#'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'UI/UX Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'ReactJS'} progress={'70%'} width={'70%'} />
            </div>
        </div>
    )
}

export default AboutPage
