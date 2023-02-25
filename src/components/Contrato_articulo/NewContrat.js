import './Navbartop.scss'
const NewContrat_article = () => {
    return <>
        <p className='big__text__title'
            style={{ color: '#ffff' }}>
            ¿Buscas talento TI?
        </p>
        <div className='medium__text__title'
            style={{ color: '#ffff' }}>
            <span>Contrata</span> <span style={{ color: 'rgba(0, 143, 247, 1)' }}>Talento TI </span><span>rápdo,</span><br />
            inteligente y eficiente
        </div>
        <p className='normal__text'
            style={{ color: '#ffff' }}>
            Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas
        </p>
        <input className='btn__dev normal__text btn-white btn__contact' type={'button'} value={'QUIERO CONTRATAR'}></input>
    </>
}

export default NewContrat_article