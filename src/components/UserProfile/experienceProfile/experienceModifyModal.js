import React, { useState } from 'react'
import ModalModify from '../modalModify/ModalModify'
import swal from 'sweetalert';
import { softwareWorkExperience } from '../../../utils/contactFormSoftwareWorkExperience';
import { englishLevels } from '../../../utils/EnglishLevels';
import { Pencil } from 'react-bootstrap-icons';

const ExperienceModifyModal = ({ showModal, handleShow }) => {
    const initialState = {}//language: undefined, aviable_time: undefined
    const [form, setForm] = useState(initialState);


    const onFormUpdate = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const updateLang = (e) => {
        setForm({ ...form, language: e.target.value })
    }
    const handleResetState = () => {
        setForm({ initialState })
    }
    const handleCloseModal = () => handleShow(false);

    const bodyM = <div className='experience-edit d-flex flex-column'>
        <div className='experience-edit__years'>
            {
                softwareWorkExperience.map(({ name, value }) => {
                    return <div className='d-flex align-items-center' key={name + value}>
                        <input
                            type="radio" id={value}
                            onClick={onFormUpdate}
                            name="aviable_time"
                            value={name}
                            className='m-2'
                        />
                        <label htmlFor={value} >{name}</label>
                    </div>
                })
            }
        </div>
        <div className='experience-edit__english'>
            <hr />
            <div className='fs-4 mb-3'><Pencil className='fs-5 me-3' />Cambiar nivel de Inglés</div>
            <select onChange={updateLang}>
                <option value="" disabled hidden>
                    Selecciona
                </option>
                {
                    englishLevels.map(({ name, value }) => (
                        <option key={name} value={value}>
                            {name}
                        </option>
                    ))
                }
            </select>
        </div>
    </div>

    const handleAcceptModal = () => {
        if (form?.language || form?.aviable_time)
            swal({
                title: form.aviable_time || form.language,
                text: "Experiencia laboral cambiada exitosamente!",
                icon: "success",
            });
        handleResetState()
        handleCloseModal()
    }

    const handleError = () => {
        swal({
            title: "Lo sentimos",
            text: "Su experiencia laboral no pudo ser cambiada exitosamente!! Intente de nuevo",
            icon: "error",
        });
        handleCloseModal()
    }
    console.log('form')
    console.log(form)
    return (
        <ModalModify
            tittle={'Cambiar Experiencia Laboral'}
            btnOk='Aceptar'
            show={showModal}
            handleClose={handleCloseModal}
            handleOk={handleAcceptModal}
            handleError={handleError}
            modalBody={bodyM}
        />
    )
}
export default ExperienceModifyModal