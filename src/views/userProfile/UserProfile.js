import './userProfile.scss'
import React, { useState } from 'react'
import MenuProfile from '../../components/UserProfile/menuProfiles'
import HomeUserProfile from '../../components/UserProfile/homeProfile'
import PersonalProfile from '../../components/UserProfile/personalProfile'
import TestProfile from '../../components/UserProfile/testProfile'

const UserProfile = () => {
    const [choice_selected, setChoice] = useState('home')
    const menuRender = {
        home: < HomeUserProfile />,
        perfil: < PersonalProfile />,
        test: <TestProfile />
    }

    return (
        <>
            <section className='user-profile'>
                <div className='user-profile__menu'>
                    <MenuProfile choice_selected={setChoice} />
                </div>
                <div className='user-profile__content'>
                    {menuRender[choice_selected]}
                </div>
            </section>
        </>
    )
}

export default UserProfile