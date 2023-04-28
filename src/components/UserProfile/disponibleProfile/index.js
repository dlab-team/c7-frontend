import React, { useState } from 'react'
import { Calendar2Check } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'
import AviableModifyModal from './AviableModifyModal';
import { useSelector } from 'react-redux';

const DisponibleProfile = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const aviableWork = useSelector((store) => store.aviableWork.aviable)

    return (
        <>
            <GenericProfileSection
                IconTitle={Calendar2Check}
                titleSection='Disponibilidad'
                nameJob={aviableWork || 'No definida'}
                description=' '
                handleEdit={() => handleShow()}
            />
            <AviableModifyModal showModal={show} handleShow={setShow} />
        </>
    )
}

export default DisponibleProfile