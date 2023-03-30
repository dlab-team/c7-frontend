import React from 'react'
import { InfoCircleFill, StarFill } from 'react-bootstrap-icons'
import TestCardsList from '../testCardsList/testCardsList'
import './testProfile.scss'

const TestProfile = () => {
  return (
    <section className='test-profile'>
      <div className='test-profile__title'>Completa los tests técnicos</div>
      <div className='test-profile__section'>
        <span>
          De esta forma podemos conocer qué trabajos encajan mejor contigo. Haz los tests de las habilidades que te gustaría continuar usando para tu próximo trabajo.
        </span>
        <span>
          Marcamos tus <b>habilidades destacadas </b>según tu <b style={{ color: 'blue', fontWeight: '600' }}>perfil </b>con una estrella <StarFill className='icons-test-profile icons-test-profile_yellow' />
        </span>
        <span className='section_tip'>
          <InfoCircleFill className='icons-test-profile icons-test-profile_blue' />Tip: Si temes fallar un test, no te preocupes. Puedes volver a realizarlo luego de 3 meses.
        </span>
      </div>

      <div className='test-profile__skills'>

        <b>Habilidades</b>
        <div className='skills-button'>
          <input className='skills-button__finder' type={'text'} />
          <div className='skills-button__container'>
            <input className='skills-button__item' type={'button'} value='Todos' />
            <input className='skills-button__item' type={'button'} value='Skill-based' />
            <input className='skills-button__item' type={'button'} value='Backend' />
            <input className='skills-button__item' type={'button'} value='Containers' />
            <input className='skills-button__item' type={'button'} value='Data engineering' />
            <input className='skills-button__item' type={'button'} value='Database' />
            <input className='skills-button__item' type={'button'} value='DevOps' />
            <input className='skills-button__item' type={'button'} value='Frontend' />
            <input className='skills-button__item' type={'button'} value='Hybrid mobile' />
            <input className='skills-button__item' type={'button'} value='Infrastructure' />
            <input className='skills-button__item' type={'button'} value='Java' />
            <input className='skills-button__item' type={'button'} value='Microsoft' />
            <input className='skills-button__item' type={'button'} value='Mobile' />
            <input className='skills-button__item' type={'button'} value='Other' />
            <input className='skills-button__item' type={'button'} value='PHP' />
            <input className='skills-button__item' type={'button'} value='Python' />
            <input className='skills-button__item' type={'button'} value='React' />
          </div>
        </div>
      </div>
      <div className='test-profile__cards'>
        <TestCardsList />
      </div>

    </section >
  )
}

export default TestProfile