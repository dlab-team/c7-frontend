import React, { useState } from 'react'
import { Calendar2Check } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'
import AviableModifyModal from './AviableModifyModal';

const DisponibleProfile = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <GenericProfileSection
                IconTitle={Calendar2Check}
                titleSection='Disponibilidad'
                nameJob='Full time'
                description='Disponibilidad inmediata'
                handleEdit={() => handleShow()}
            />
            <AviableModifyModal showModal={show} handleShow={setShow} />
        </>
    )
}

export default DisponibleProfile