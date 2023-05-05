import React, { useState } from 'react'
import { CloudUpload, Pen } from 'react-bootstrap-icons'
import './cvProfile.scss'

const CvProfile = () => {
    const initial_cv = 'mi curriculum.pdf'
    const [pdfSelection, setPdfSelection] = useState(initial_cv)

    const handleImportingCv = (e) => {
        setPdfSelection(e.target.files[0].name)
    }
    
    return (
        <div className='cv-profile'>
            <div className='cv-profile__title'>
                <CloudUpload className='me-3' />
                <span>Sube tu CV</span>
            </div >

            <div className='cv-profile__cv'>
                <span className='cv-name'>
                    {pdfSelection}
                </span>

                {/* el input esta con 0 de opacidad para experiencia usuario, piensa que dio en el lapiz */}
                <div className='cv-selector'>
                    <input
                        type='file'
                        className='cv-selector__input'
                        onChange={handleImportingCv}
                        accept='application/pdf'
                    />
                    <Pen className='ms-4 cv-selector__icon' style={{ cursor: 'pointer' }} />
                </div>
            </div >
        </div >
    )
}

export default CvProfile