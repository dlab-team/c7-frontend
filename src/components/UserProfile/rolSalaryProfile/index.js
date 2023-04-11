import React from 'react'
import { PersonVcard } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'

const RolSalaryProfile = () => {
    return (
        <GenericProfileSection
            IconTitle={PersonVcard}
            titleSection='Rol y salario actual'
            nameJob='Fullstack'
            description='Salario actual 1.000.000 clp'
        />
    )
}

export default RolSalaryProfile