import React from 'react'
import { Calendar2Check } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'

const DisponibleProfile = () => {
    return (
        <GenericProfileSection
            IconTitle={Calendar2Check}
            titleSection='Disponibilidad'
            nameJob='Full time'
            description='Disponibilidad inmediata'
        />
    )
}

export default DisponibleProfile