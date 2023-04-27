import React from 'react'
import { Pen } from 'react-bootstrap-icons'
import './genericProfileSection.scss'


export const GenericProfileSection = ({ IconTitle, titleSection = 'Titulo generico', nameJob = 'Skills', description = 'javaScript, php, c/c++' , handleEdit = ()=> alert(123)}) => {

    return <>
        <section className='generic-profile'>
            <div className='generic-profile__title'>
                <IconTitle className='me-3 fs-4' />
                <span>{titleSection}</span>
            </div>

            <div className='generic-profile__data'>

                <div className='generic-data'>
                    <span><b>{nameJob}</b></span>
                    <span>{description}</span>
                </div>

                <div>
                    <Pen onClick={handleEdit} className='ms-5 fs-6' style={{ cursor: 'pointer' }} />
                </div>
            </div>

        </section>
    </>
}
