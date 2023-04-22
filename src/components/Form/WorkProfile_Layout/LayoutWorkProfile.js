import React from 'react'
import ilustration from '../../../assets/softwareDeveloper.jpg'
import FormController from '../WorkProfile_FormController/FormController'
import './LayoutWorkProfile.scss'

const LayoutWorkProfile = () => {

    return <>
        <div className='modal-work-profile'>
            <div className='modal-work-profile__form-display form-display' >

                <div className='form-display__ilustration' >
                    <img src={ilustration} alt='ilustracion' />
                </div>

                <div className='form-display__regiter' >
                    <FormController />
                </div>
            </div>
        </div>
    </>
}

export default LayoutWorkProfile;