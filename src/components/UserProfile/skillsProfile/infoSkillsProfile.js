import React, { useEffect, useState } from 'react'
import { Award, Pen, Trash3 } from 'react-bootstrap-icons'
import './infoSkillsProfile.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Dropdown, DropdownButton, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { addLanguage, deleteLanguage, modifyLanguage, setLanguages } from '../../../utils/Redux/Slices/Languages'
import { languages as LANGUAGES_DEVS } from '../../../utils/LanguagesList'
import SkillsRenderSection from './SkillRenderSection'

const InfoSkillsProfile = () => {
    const skillsDev = useSelector((store) => store.languages.languages)
    const [editMode, setEditMode] = useState(false)
    const CATEGORYS_LANGUAGE = ['Principiante', 'Experimentado', 'Avanzado']
    const CATEGORYS_DESCRIPTION = [
        ' No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta.',
        'No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta.',
        'Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos.'
    ]
    const dispatch = useDispatch()

    const [languageControl, setLanguageControl] = useState({})

    useEffect(() => {
        if (skillsDev) {
            updateLanguagesCat()
        }
    }, [skillsDev])

    //se encarga de actualizar el estado donde viviran las categorias y sus lenguajes
    function updateLanguagesCat() {
        let listSkill = []
        skillsDev.map(({ name, value }) => {
            const aux = { category: CATEGORYS_LANGUAGE[value - 1], lang: name }
            listSkill.length
                ?
                listSkill = [
                    ...listSkill, aux
                ]
                :
                listSkill = [aux]

        })
        setLanguageControl(listSkill)
    }

    const updateValue = (name, value) => {
        try {
            dispatch(modifyLanguage({ name, value }))
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddLang = (name, value = 0) => {
        const payload = { name, value }

        try {
            (!!skillsDev)
                ?
                dispatch(addLanguage({ name, value }))
                :
                dispatch(setLanguages([payload]))

        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteLang = (name) => {
        try {
            dispatch(deleteLanguage(name))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='skills-profile'>
            <div className='skills-profile__data'>

                <div className='data-title'>
                    <Award className='me-3 fs-4' />
                    <span>Habilidades</span>
                </div>

                <div className='skills-list'>

                    {
                        (editMode) && <>
                            <Button onClick={(prev) => setEditMode(!prev)} className='bg-transparent border-danger text-danger'>Cerrar "Edición de Habilidades"</Button>
                            <DropdownButton id="dropdown-Lenguajes" title="Lenguajes">
                                {LANGUAGES_DEVS
                                    .filter((lang) =>
                                        (languageControl.length > 0)
                                            ? ![...skillsDev.map(mySkill => mySkill.name)].includes(lang.name)
                                            : true
                                    )
                                    .map(({ name, value }, index) => {
                                        return (
                                            <li key={index}>
                                                {(index > 0) && <Dropdown.Item
                                                    as="button"
                                                    onClick={() => handleAddLang(name, value)}
                                                >
                                                    {name}
                                                </Dropdown.Item>
                                                }

                                            </li>
                                        );
                                    })}
                            </DropdownButton>


                            {
                                (skillsDev?.length > 0) && <>
                                    <table className="table table-hover">
                                        <thead className='ms-5 thead-dark'>
                                            <tr>

                                                <td colSpan="2" className='fw-bold'>Lenguages</td>
                                                <td colSpan="10 " className='fw-bold'>Nivel</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                skillsDev.map((lang) => {
                                                    return <tr key={lang.name} className={`table-active  ${lang.value === 0 ? 'skill-no-category' : ' '}`}>
                                                        <td colSpan="2">{lang.name}</td>

                                                        <td colSpan="10" className=''>
                                                            {/* Categorias */}
                                                            <Col className='d-md-flex'>
                                                                {
                                                                    CATEGORYS_LANGUAGE.map((btn_category, index) => {
                                                                        return <div key={btn_category + '-' + lang.value}>
                                                                            <OverlayTrigger
                                                                                placement="left"
                                                                                delay={{ show: 500, hide: 100 }}
                                                                                overlay={
                                                                                    <Tooltip id={`tooltip-${index}`}>
                                                                                        {CATEGORYS_DESCRIPTION[index]}
                                                                                    </Tooltip>
                                                                                }
                                                                            >
                                                                                <label htmlFor={`lvl-${index}-${lang.name}`}>
                                                                                    <Form.Check
                                                                                        inline
                                                                                        label={btn_category}
                                                                                        id={`lvl-${index}-${lang.name}`}
                                                                                        type="radio"
                                                                                        name={`check-${lang.name}`}
                                                                                        onChange={() => updateValue(lang.name, index + 1)}
                                                                                        defaultChecked={index === (lang.value - 1)}
                                                                                    />
                                                                                </label>
                                                                            </OverlayTrigger>
                                                                        </div>
                                                                    })
                                                                }
                                                            </Col>
                                                        </td>
                                                        <td colSpan="1"><Trash3 style={{ cursor: 'pointer' }} className='fs-4' onClick={() => handleDeleteLang(lang.name)} /> </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </>}

                        </>
                    }

                    {
                        (languageControl.length && !editMode) && <>
                            {
                                CATEGORYS_LANGUAGE
                                    .map((catX) => {
                                        const listLang = languageControl
                                            .filter((eleme) => (eleme.category === catX))
                                            .map(element => element.lang)
                                        if (listLang.length)
                                            return <div key={catX}>
                                                <SkillsRenderSection
                                                    category={catX}
                                                    skills={listLang}
                                                />
                                            </div>
                                    })
                            }
                        </>
                    }
                </div>
            </div>
            {
                (!editMode) && <>
                    <div>
                        <Pen onClick={() => setEditMode(true)} className='ms-5 fs-6' style={{ cursor: 'pointer' }} />
                    </div>
                </>
            }
        </section >
    )
}

export default InfoSkillsProfile