import React from 'react'
import ilustration from '../../assets/formIlustrationformIlustrat.png'
import FormController from '../WorkProfile_FormController/FormController'
import './LayoutWorkProfile.scss'

const LayoutWorkProfile = () => {

    return <>
        <div className='modal-work-profile'>
            <div className='modal-work-profile__ilustration' >
                <img src={ilustration} alt='ilustracion' />
            </div>

            <div className='modal-work-profile__form-display' >
                <div  className='close-button'> X </div>
                <div className='form__regiter' >
                    <FormController />
                </div>
            </div>
        </div>
    </>
}

export default LayoutWorkProfile;