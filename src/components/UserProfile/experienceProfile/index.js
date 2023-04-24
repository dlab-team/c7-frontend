import React, { useState } from 'react'
import { JournalText } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'
import ExperienceModifyModal from './experienceModifyModal';

const ExperienceProfile = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    return <>
        <GenericProfileSection
            IconTitle={JournalText}
            titleSection='Experiencia Laboral'
            nameJob='1 a 3 años de experiencia'
            description='Nivel de ingles avanzado'
            handleEdit={() => handleShow()}
        />
        <ExperienceModifyModal showModal={show} handleShow={setShow} />
    </>
}


export default ExperienceProfile