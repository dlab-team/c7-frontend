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
                    {
                        !active.home
                            ? <House className='icons-profile icon-profile__links' />
                            : <HouseFill className='icons-profile icon-profile__links' />
                    }
                    Home
                </li>
                <></>

                <li className={`text--normal menu-list__item ${active.perfil}`} onClick={() => handleClick('perfil')}>
                    {
                        !active.perfil
                            ? <Person className='icons-profile icon-profile__links' />
                            : <PersonFill className='icons-profile icon-profile__links' />
                    }
                    Perfil
                </li>

                <li className={`text--normal menu-list__item ${active.test}`} onClick={() => handleClick('test')}>
                    <JournalCode className='icons-profile icon-profile__links' />
                    Test Técnico
                </li>


            </ul >
        </div >
    )
}

export default MenuProfile