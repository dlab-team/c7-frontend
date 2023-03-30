import './userProfile.scss'
import React, { useState } from 'react'
import MenuProfile from '../../components/menuProfiles/menuProfile'
import HomeUserProfile from '../../components/homeProfile/homeProfile'
import PersonalProfile from '../../components/personalProfile/personalProfile'
import TestProfile from '../../components/testProfile/testProfile'
// import TestProfile from '../../components/testProfile/testProfileList'

const UserProfile = () => {
    const [choice_selected, setChoice] = useState('home')

    return (
        <section className='user-profile'>
            <div className='user-profile__menu'>
                <MenuProfile choice_selected={setChoice} />
            </div>
            <div className='user-profile__content'>
                {choice_selected === 'home' && <HomeUserProfile />}
                {choice_selected === 'perfil' && <PersonalProfile />}
                {choice_selected === 'test' && <TestProfile />}

            </div>
        </section>
    )
}

export default UserProfile