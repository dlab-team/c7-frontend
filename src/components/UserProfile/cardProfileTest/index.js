import React from 'react'
import './cardTest.scss'
import defaultImg from '../../../assets/potenciamos.png'

const CardTest = ({ imgSrc = defaultImg, title, time, link_text = 'empezar test', handleLink_text }) => {
    return (
        <div className='card-profile-test'>
            <img alt={title} className='card-profile-test__image' src={imgSrc} />
            <div className='card-profile-test__title'><b>{title}</b></div>
            <div className='card-profile-test__time'>{time}</div>
            <div className='card-profile-test__link' onClick={handleLink_text}>{link_text}</div>
        </div>
    )
}

export default CardTest