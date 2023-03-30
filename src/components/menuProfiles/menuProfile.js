import React, { useState } from 'react'
import { Briefcase, House, HouseFill, JournalCode, Person, PersonFill } from 'react-bootstrap-icons'
import './menuProfile.scss'

const MenuProfile = ({ choice_selected }) => {

    const [active, setActive] = useState({
        home: 'active',
        perfil: '',
        test: ''
    });

    const handleClick = (status_X) => {
        setActive({
            home: '',
            perfil: '',
            test: '', [status_X]: 'active'
        });

        choice_selected(status_X)
    }

    return (
        <div className='menu-container'>
            <header>
                <div className='menu-container__tittle'>
                    <Briefcase className='icons-profile icon-profile__tittle' />JOB READY
                </div>

            </header>
            <ul className='menu-list'>
                <li className={`text--normal menu-list__item ${active.home}`} onClick={() => handleClick('home')}>
                    <a href='#'>
                        {
                            !active.home
                                ? <House className='icons-profile icon-profile__links' />
                                : <HouseFill className='icons-profile icon-profile__links' />
                        }
                        Home </a>
                </li>
                <></>

                <li className={`text--normal menu-list__item ${active.perfil}`} onClick={() => handleClick('perfil')}>
                    <a href='#'>
                        {
                            !active.perfil
                                ? <Person className='icons-profile icon-profile__links' />
                                : <PersonFill className='icons-profile icon-profile__links' />
                        }
                        Perfil  </a>
                </li>

                <li className={`text--normal menu-list__item ${active.test}`} onClick={() => handleClick('test')}>
                    <a href='#'>
                        <JournalCode className='icons-profile icon-profile__links' />
                        Test Técnico  </a>
                </li>

            </ul >
        </div >
    )
}

export default MenuProfile