import React from 'react'
import { Envelope, Github, Linkedin, Pen, Telephone } from 'react-bootstrap-icons'
import defaultImage from '../../assets/unknownPhoto.svg'
import './infoPersonalProfile.scss'

const InfoPersonalProfile = () => {
    return (
        <section className='user-info'>
            <div className='user-info__data'>
                <div className='personal-data'>
                    <img className='personal-data__img' src={defaultImage} alt={defaultImage} />
                    <div className='personal-data__name'>
                        <span><b>Bernand Eich</b></span>
                        <span>EEUU</span>
                    </div>
                </div>

                <section className='user-info__contact'>
                    <span><Envelope className='me-3 fs-4' />bernandeich@gmail.com</span>
                    <span><Telephone className='me-3 fs-4' />+1 652 687 452</span>
                    <Linkedin className='me-3 fs-4' />
                    <Github className='me-3 fs-4' />
                </section>
            </div>
            <div>
                <Pen className='ms-3 fs-6' style={{ cursor: 'pointer' }} />
            </div>

        </section>
    )
}

export default InfoPersonalProfile