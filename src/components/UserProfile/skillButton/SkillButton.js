import React from 'react'
import { Form } from 'react-bootstrap'
import './skillButton.scss'
import { StarFill } from 'react-bootstrap-icons'



const SkillButton = ({ language, onChangeLang, defaultChecked = false, favorite = false, handleFavorite, handleError }) => {

    const handleSubmitFavorite = () => {
        if (handleFavorite) {
            try {
                handleFavorite()
            } catch (error) {
                handleError();
            }
        }
    }
    return (
        <>
            <div className={`skill`} >
                <Form.Check type={'checkbox'}
                    id={`skill-${language}`}
                    label={`${language}`}
                    onChange={onChangeLang}
                    defaultChecked={defaultChecked}
                />
                <div onClick={handleSubmitFavorite} className={`skill__favorite ${favorite ? 'isFavorite' : ' '}`}>
                    <StarFill id='star-fav' className='skill__favorite-star fs-5 text-warning ms-2' />
                </div >
            </div>
        </>
    )
}

export default SkillButton