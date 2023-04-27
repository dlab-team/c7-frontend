import React from 'react'
import CvProfile from '../cvProfile'
import DisponibleProfile from '../disponibleProfile'
import EducationProfile from '../educationProfile/index'
import ExperienceProfile from '../experienceProfile'
import InfoPersonalProfile from '../infoPersonalProfile'
import RolSalaryProfile from '../rolSalaryProfile'
import InfoSkillsProfile from '../skillsProfile/infoSkillsProfile'
import './personalProfile.scss'

const PersonalProfile = () => {
    return (
        <section className='personal-info'>

            <div className='personal-info__cv'>
                <CvProfile />
            </div><hr />

            <div className='personal-info__personal'>
                <InfoPersonalProfile />
            </div><hr />

            <div className='personal-info__experience'>
                <ExperienceProfile />
            </div><hr />

            <div className='personal-info__disponible'>
                <DisponibleProfile />
            </div><hr />

            <div className='personal-info__roleSalary'>
                <RolSalaryProfile />
            </div><hr />

            <div className='personal-info__skills'>
                <InfoSkillsProfile />
            </div><hr />

            <div className='personal-info__education'>
                <EducationProfile />
            </div><hr />
        </section>
    )
}

export default PersonalProfile