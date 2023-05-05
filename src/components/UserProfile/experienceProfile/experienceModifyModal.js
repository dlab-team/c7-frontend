import React, { useState } from 'react'
import ModalModify from '../modalModify/ModalModify'
import swal from 'sweetalert';
import { softwareWorkExperience } from '../../../utils/contactFormSoftwareWorkExperience';
import { englishLevels } from '../../../utils/EnglishLevels';
import { Pencil } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setEnglishLevel } from '../../../utils/Redux/Slices/englishLevel';
import { setLaboralExp } from '../../../utils/Redux/Slices/laboralExp';

const ExperienceModifyModal = ({ showModal, handleShow }) => {
    const initialState = {}//language: undefined, laboralExp: undefined
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch()

    const laboralExp = useSelector((store) => store.laboralExp.laboralExp)
    const engLevel = useSelector((store) => store.englishLevel.englishLevel)


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
                        {(value !== laboralExp) && <>
                            <input
                                type="radio" id={value}
                                onClick={onFormUpdate}
                                name="laboralExp"
                                value={name}
                                className='m-2'
                            />
                            <label htmlFor={value} >{name}</label>
                        </>}
                    </div>
                })
            }
        </div>
        <div className='experience-edit__english'>
            <hr />
            <div className='fs-4 mb-3'><Pencil className='fs-5 me-3' />Cambiar nivel de Inglés</div>
            <select className='form-control border-primary' onChange={updateLang}>
                <option value="default" defaultChecked={engLevel}>
                    {engLevel}
                </option>
                {
                    englishLevels.map(({ name, value }) => {
                        return <React.Fragment key={name + value} >
                            {(value !== engLevel) &&
                                <option value={value}>
                                    {name}
                                </option >
                            }
                        </React.Fragment>
                    }
                    )
                }
            </select>
        </div>
    </div >

    const handleAcceptModal = () => {
        let resp = [];

        if (form?.language || form?.laboralExp)

            if (form.language) {
                dispatch(setEnglishLevel(form.language))
                resp.push('Nivel Inglés')
            }
        if (form.laboralExp) {
            dispatch(setLaboralExp(form.laboralExp))
            resp.push('Exp. Laboral')
        }
        swal({
            title: [...resp],
            text: "modificado exitosamente!",
            icon: "success",
        });
        handleResetState()
        handleCloseModal()
    }

    const handleError = () => {
        swal({
            title: "Lo sentimos",
            text: "No pudo hacerce la modificación exitosamente!! Intente de nuevo",
            icon: "error",
        });
        handleCloseModal()
    }

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