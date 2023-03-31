import React from 'react'
import { InfoCircleFill, StarFill } from 'react-bootstrap-icons'
import TestCardsList from '../testCardsList/testCardsList'
import './testProfile.scss'
import FinderSkillsProfile from '../finderSkillsProfile/finderSkillsProfile'

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
        <FinderSkillsProfile />
      </div>
      <div className='test-profile__cards'>
        <TestCardsList />
      </div>

    </section >
  )
}

export default TestProfile