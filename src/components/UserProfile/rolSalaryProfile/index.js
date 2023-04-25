import React, { useState } from 'react'
import { PersonVcard } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'
import RolSalaryModify from './rolSalaryModify'
import { useSelector } from 'react-redux'

const RolSalaryProfile = () => {
    const [showModifyModal, setModifyModal] = useState(false)
    const rolDeveloper = useSelector((store) => store.rolDevelop.rol)
    const salaryExp = useSelector((store) => store.salaryExpectative.salaryExp)


    return (
        <>
            <GenericProfileSection
                IconTitle={PersonVcard}
                titleSection='Rol y salario actual'
                nameJob={rolDeveloper || 'No definido'}
                description={`Salario actual $ ${salaryExp} `}
                handleEdit={() => setModifyModal(true)}
            />
            <RolSalaryModify showModal={showModifyModal} handleShow={setModifyModal} />
        </>
    )
}

export default RolSalaryProfile