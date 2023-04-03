import React from 'react'
import { Pen, Trash3 } from 'react-bootstrap-icons'

const EducationRender = ({ nameWork = 'Desafio Latam', data = 'Mar 2021- Mar 2022', stack = 'FullStack' }) => {
    return (
        <>
            <section className='py-4 education-profile d-flex align-items-center justify-content-between'>
                <div className='education-profile__data d-flex flex-column '>
                    <div className='text-primary fs-6'>{data}</div>
                    <div className='fs-6 fw-normal fw-bold'>{nameWork}</div>
                    <div className='text-primary fs-7'>{stack}</div>
                </div>

                <div>
                    <Pen className='ms-5 fs-6' style={{ cursor: 'pointer' }} />
                    <Trash3 className='ms-4 fs-6' style={{ cursor: 'pointer' }} />
                </div>

            </section >


        </>
    )
}

export default EducationRender