import React, { useState } from 'react'
import ModalModify from '../modalModify/ModalModify'
import { workAvailability as currentAviabile } from '../../../utils/FormWorkAvailability';
import swal from 'sweetalert';

const AviableModifyModal = ({ showModal, handleShow }) => {
    const [selected, setSelected] = useState('');

    const handleCloseModal = () => handleShow(false);

    const bodyM = currentAviabile.map(({ name, value }) => {
        return <div className='d-flex align-items-center' key={name + value}>
            <input
                type="radio" id={value}
                onClick={() => setSelected(value)}
                name="aviable_time"
                value={name}
                className='m-2'
            />
            <label htmlFor={value} >{name}</label>
        </div>
    })

    const handleAcceptModal = () => {
        swal({
            title: selected,
            text: "Disponbibilidad cambiada exitosamente!",
            icon: "success",
        });
        handleCloseModal()
    }

    const handleError = () => {
        swal({
            title: "Lo sentimos",
            text: "Disponbibilidad no pudo ser cambiada exitosamente!! Intente de nuevo",
            icon: "error",
        });
        handleCloseModal()
    }

    return (
        <ModalModify
            tittle={'Cambiar disponibilidad'}
            btnOk='Aceptar'
            show={showModal}
            handleClose={handleCloseModal}
            handleError={handleError}
            modalBody={bodyM}
            handleOk={handleAcceptModal}
        />
    )
}

export default AviableModifyModal