import './userProfile.scss'
import React, { useState } from 'react'
import MenuProfile from '../../components/menuProfiles/menuProfile'
import HomeUserProfile from '../../components/homeProfile/homeProfile'
import PersonalProfile from '../../components/personalProfile/personalProfile'
import TestProfile from '../../components/testProfile/testProfile';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const UserProfile = () => {
    const [choice_selected, setChoice] = useState('home')
    const menuRender = {
        home: < HomeUserProfile />,
        perfil: < PersonalProfile />,
        test: <TestProfile />
    }

    return (
        <>
            <Navbar />

            <section className='user-profile'>
                <div className='user-profile__menu'>
                    <MenuProfile choice_selected={setChoice} />
                </div>
                <div className='user-profile__content'>
                    {menuRender[choice_selected]}
                    {/*choice_selected === 'home' && <HomeUserProfile />}
                    {choice_selected === 'perfil' && <PersonalProfile />}
                    {choice_selected === 'test' && <TestProfile />} */}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default UserProfile