import React, { useState } from 'react'
import ilustration from '../../assets/formIlustrationformIlustrat.png'
import FormController from '../WorkProfile_FormController/FormController'
import './LayoutWorkProfile.scss'

const LayoutWorkProfile = ({ isOpen }) => {
    const [open, setOpen] = useState(true);

    const handleOpenClose = () => {
        setOpen(false)
        isOpen(false)
    }

    return <>
        <div className='modal-container'>
            {open && <>Modal abierto</>}
            <div className='modal-container__ilustration' >
                <img src={ilustration} alt='ilustracion' />
            </div>

            <div className='modal-container__form-display' >
                <div onClick={handleOpenClose} className='close-button'> X </div>
                <div className='form__regiter' >
                    <FormController />
                </div>
            </div>
        </div>
    </>
}

export default LayoutWorkProfile