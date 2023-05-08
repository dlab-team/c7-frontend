import React, { useState } from 'react'
import ModalModify from '../modalModify/ModalModify'
import { workAvailability as currentAviabile } from '../../../utils/FormWorkAvailability';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { setAvibility } from '../../../utils/Redux/Slices/aviableWork';

const AviableModifyModal = ({ showModal, handleShow }) => {
    const aviableWork = useSelector((store) => store.aviableWork.aviable)
    const [selected, setSelected] = useState(aviableWork);

    const dispatch = useDispatch()
    const handleCloseModal = () => handleShow(false);


    const addOrRemove = (arr, item) => arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];

    const handleChangeAviableWork = (aviability) => {
        setSelected(addOrRemove(selected, aviability))
    }

    const bodyM = currentAviabile.map(({ name, value }) => {
        return <div key={name} className='d-flex align-items-center'>
            {
                <>
                    < input
                        type="checkbox" id={value}
                        onChange={() => handleChangeAviableWork(value)}
                        name="aviable_time"
                        value={name}
                        className='m-2'
                        key={name + value}
                        defaultChecked={selected.includes(value)}
                    />
                    <label htmlFor={value} >{name}</label>
                </>
            }
        </div >
    })

    const handleAcceptModal = () => {
        
        if (selected) {
            dispatch(setAvibility(selected))
            swal({
                title: selected,
                text: "Disponbibilidad cambiada exitosamente!",
                icon: "success",
            });
        }

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