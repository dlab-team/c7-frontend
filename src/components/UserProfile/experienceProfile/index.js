import React, { useState } from 'react'
import { JournalText } from 'react-bootstrap-icons'
import { GenericProfileSection } from '../genericProfileSection'
import ExperienceModifyModal from './experienceModifyModal';
import { useSelector } from 'react-redux';

const ExperienceProfile = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const laboralExp = useSelector((store) => store.laboralExp.laboralExp)
    const engLevel = useSelector((store) => store.englishLevel.englishLevel)


    return <>
        <GenericProfileSection
            IconTitle={JournalText}
            titleSection='Experiencia Laboral'
            nameJob={laboralExp || 'Sin experiencia'}
            description={`Nivel de ingles  ${engLevel || ''}`}
            handleEdit={() => handleShow()}
        />
        <ExperienceModifyModal showModal={show} handleShow={setShow} />
    </>
}


export default ExperienceProfile