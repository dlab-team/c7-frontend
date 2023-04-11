import React from 'react'
import { Award, Pen } from 'react-bootstrap-icons'
import './infoSkillsProfile.scss'
import SkillsRenderSection from './SkillRenderSection'

const InfoSkillsProfile = () => {
    return (
        <section className='skills-profile'>
            <div className='skills-profile__data'>

                <div className='data-title'>
                    <Award className='me-3 fs-4' />
                    <span>Habilidades</span>
                </div>

                <div className='skills-list'>
                    <SkillsRenderSection category={'Avanzado'} skills={['HTML', 'REACT', 'CSS3', 'JAVASCRIPT']} />
                    <SkillsRenderSection category={'Experimentado'} skills={['Figma', 'Redux Toolkit/Quey', 'UI/UX', 'Jira', 'git/gitHub']} />
                    <SkillsRenderSection category={'Principiante'} skills={['TypeScript', 'Angular', 'postgreSQL', 'mySQL']} />
                </div>
                
            </div>
            <div>
                <Pen className='ms-5 fs-6' style={{ cursor: 'pointer' }} />
            </div>

        </section >
    )
}

export default InfoSkillsProfile