import './Navbartop.scss';

const NewContractArticle = () => {

    return <>
        <p className='text__title--big'
            style={{ color: '#ffff' }}>
            ¿Buscas talento TI?
        </p>
        <div className='text__title--medium'
            style={{ color: '#ffff' }}>
            <span>Contrata</span> <span style={{ color: 'rgba(0, 143, 247, 1)' }}>Talento TI </span><span>rápido,</span><br />
            inteligente y eficiente
        </div>
        <p className='text--normal'
            style={{ color: '#ffff' }}>
            Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas
        </p>
        <a href="#contactForm" className='btn-app text--normal btn-app--white'>QUIERO CONTRATAR</a>
    </>
}

export default NewContractArticle