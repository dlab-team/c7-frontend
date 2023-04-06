import React from 'react'
import CvProfile from '../cvProfile/cvProfile'
import DisponibleProfile from '../disponibleProfile/disponibleProfile'
import EducationProfile from '../educationProfile/index'
import ExperienceProfile from '../experienceProfile/experienceProfile'
import InfoPersonalProfile from '../infoPersonalProfile/infoPersonalProfile'
import RolSalaryProfile from '../rolSalaryProfile/rolSalaryProfile'
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