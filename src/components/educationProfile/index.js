import React from 'react'
import { Book } from 'react-bootstrap-icons'
import EducationRender from './EducationRender'

const EducationProfile = () => {
    return (
        <>
            <div className='data-title'>
                <Book className='me-3 fs-4' />
                <span>Educación</span>
            </div>
            <EducationRender
                nameWork={'Desafio Latam'}
                data={'Enero 2023 - Mar 2023'}
                stack='Frontend/ReactJs'
            />
            <EducationRender
                nameWork={'Apple'}
                data={'Enero 2015 - Mar 2019'}
                stack='QA test'
            />
            <EducationRender
                nameWork={'Macromedia'}
                data={'Enero 2000 - Mar 2010'}
                stack='Graphic Design UI/UX'
            />

        </>
    )
}

export default EducationProfile