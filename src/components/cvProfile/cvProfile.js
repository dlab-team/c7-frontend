import React from 'react'
import { CloudUpload, Pen } from 'react-bootstrap-icons'
import './cvProfile.scss'

const CvProfile = () => {
    return (
        <div className='cv-profile'>
            <div className='cv-profile__title'>
                <CloudUpload className='me-3' />
                <span>Sube tu CV</span>
            </div >
            <div className='cv-profile__cv'>
                <span className='cv-name'>
                    ejemploCV.pdf
                </span>
                <Pen className='ms-4' style={{ cursor: 'pointer' }} />
            </div >
        </div >
    )
}

export default CvProfile