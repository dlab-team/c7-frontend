import React from 'react'
import { Search } from 'react-bootstrap-icons'
import './finderSkillsProfile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setLangFavorites, setLangSelected } from '../../../utils/Redux/Slices/Languages'
import SkillButton from '../skillButton/SkillButton'
import swal from 'sweetalert'

const FinderSkillsProfile = () => {
    const skillsDev = useSelector((store) => store.languages.languages)
    const skillSelecteds = useSelector((store) => store.languages.selecteds)
    const skillFavorites = useSelector((store) => store.languages.favorites)

    const [filterSkills, setFilter] = useState('')


    const dispatch = useDispatch()

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }


    //pone y quita de redux leguages seleccionados
    const handleSelections = (itemSelected) => {
        toogleValueArray(skillSelecteds, itemSelected, setLangSelected)
    }

    //pone y quita de redux los lenguajes favoritos
    const handleFavorites = (itemSelected) => {
        toogleValueArray(skillFavorites, itemSelected, setLangFavorites)
    }

    const addOrRemove = (arr, item) => arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];
    
    // agrega o quita un valor en el store, actualiza con el callBack
    const toogleValueArray = (arrItems, itemSel, dispatchFunction) => {
        if (!arrItems) {
            dispatch(
                dispatchFunction([itemSel])
            )
            return;
        }
        dispatch(
            dispatchFunction(
                addOrRemove(arrItems, itemSel)
            )
        )
    }


    const handleError = () => {
        swal({
            title: "Lo sentimos",
            text: "Hubo un problema en la seleccion de favoritos!! Intente de nuevo",
            icon: "error",
        });
    }
    const handleSelectedCheck = (listChecks, isChecked) => !listChecks ? false : listChecks.includes(isChecked)

    return <>
        <b >Habilidades </b>
        <div className='skills-button'>
            <div className="skills-button__find mt-2 mb-3">
                <input className='form-control input-finder border-primary' type={'text'} value={filterSkills} onChange={handleFilter} />
                <Search className='input-icon' />
            </div>

            <div className='skills-button__container'>
                {skillsDev
                    ?.filter((elem) => elem.name.toUpperCase().includes(filterSkills.toUpperCase()))
                    ?.map((skillX) => {
                        return (
                            <div key={`language-${skillX.name}`}>
                                {handleSelectedCheck(skillFavorites, skillX.name)}
                                <SkillButton
                                    language={skillX.name}
                                    onChangeLang={() => handleSelections(skillX.name)}
                                    defaultChecked={handleSelectedCheck(skillSelecteds, skillX.name)}
                                    favorite={handleSelectedCheck(skillFavorites, skillX.name)}
                                    handleFavorite={() => handleFavorites(skillX.name)}
                                    handleError={handleError}
                                />
                            </div>
                        )
                    })}

            </div>
        </div>
    </>
}

export default FinderSkillsProfile