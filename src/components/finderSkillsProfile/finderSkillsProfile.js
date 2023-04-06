import React from 'react'
import { Search } from 'react-bootstrap-icons'
import './finderSkillsProfile.scss'

const FinderSkillsProfile = () => {
    return <>
        <b >Habilidades</b>
        <div className='skills-button'>

            <div className="skills-button__find mt-2 mb-3">
                <input className='form-control input-finder' type={'text'} />
                <Search className='input-icon' />
            </div>

            <div className='skills-button__container'>
                <input className='skills-button__item' type={'button'} value='Todos' />
                <input className='skills-button__item' type={'button'} value='Skill-based' />
                <input className='skills-button__item' type={'button'} value='Backend' />
                <input className='skills-button__item' type={'button'} value='Containers' />
                <input className='skills-button__item' type={'button'} value='Data engineering' />
                <input className='skills-button__item' type={'button'} value='Database' />
                <input className='skills-button__item' type={'button'} value='DevOps' />
                <input className='skills-button__item' type={'button'} value='Frontend' />
                <input className='skills-button__item' type={'button'} value='Hybrid mobile' />
                <input className='skills-button__item' type={'button'} value='Infrastructure' />
                <input className='skills-button__item' type={'button'} value='Java' />
                <input className='skills-button__item' type={'button'} value='Microsoft' />
                <input className='skills-button__item' type={'button'} value='Mobile' />
                <input className='skills-button__item' type={'button'} value='Other' />
                <input className='skills-button__item' type={'button'} value='PHP' />
                <input className='skills-button__item' type={'button'} value='Python' />
                <input className='skills-button__item' type={'button'} value='React' />
            </div>
        </div>
    </>
}

export default FinderSkillsProfile