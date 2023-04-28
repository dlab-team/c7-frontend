import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './infoSkillsProfile.scss'

const SkillsRenderSection = ({ category, ...skills }) => {
    const { skills: listSkills } = skills

    return (
        <Row className='skills-list__item d-flex align-items-center'>
            <Col className='skill-name' xs={5} lg={3}>{category}</Col>
            <Col className='all-skills d-flex flex-wrap justify-content-start '>
                {
                    listSkills.map((skill_X) => {
                        return <span key={skill_X} className='skill m-1'> {skill_X}</span >
                    })
                }
            </Col>
        </Row >
    )
}

export default SkillsRenderSection