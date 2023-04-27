import React from 'react'
import { JournalText } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'

const ExperienceProfile = () => {
    return <>
        <GenericProfileSection
            IconTitle={JournalText}
            titleSection='Experiencia Laboral'
            nameJob='1 a 3 años de experiencia'
            description='Nivel de ingles avanzado'
        />
    </>
}


export default ExperienceProfile