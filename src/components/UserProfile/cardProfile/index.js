import React from 'react'
import './cardProfile.scss'

const CardProfile = ({ numberCard, textCard }) => {
    const [firstWord, restOfText] = getFirstWord(textCard);
    return (
        <div className='card-profile'>
            <div className='card-profile__number'><b>{numberCard}</b></div>
            <div className='card-profile__text'><b>{firstWord}</b> {restOfText}</div>
        </div>
    )
}

function getFirstWord(text) {
    const textArr = text.split(' ');
    const firstWord = textArr.shift();
    const restOfText = textArr.join(' ');
    return [firstWord, restOfText];
}
export default CardProfile