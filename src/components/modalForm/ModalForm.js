import React from 'react'
import './modalForm.scss'
import ilustration from '../../assets/formIlustrationformIlustrat.png'

const ModalForm = () => {
    return <>
        <div className='modal-container'>

            <div className='modal-container__ilustration' >
                <img src={ilustration} alt='ilustracion' />
            </div>

            <div className='modal-container__form-display' >

                {/* <div className='form__header text__subject ' >
                    INFORMACION PERSONAL --  (1)
                </div> */}

                {/* <div className='form__header text__subject ' >
                    INFORMACION PERSONAL --  (1)
                </div> */}



                <div className='form__regiter' >
                    <FormController />
                </div>

            </div>

        </div>
    </>
}

const TestForm = () => {
    return <form>
        <br /> <br />
        <span>Nombre : </span>
        <input type={'text'} placeholder='Nombre' /> <br /> <br />

        <span>Apellidos : </span>
        <input type={'text'} placeholder='Apellidos' /> <br /> <br />

        <span>Correo : </span>
        <input type={'text'} placeholder='corrreo@gmail.com' /> <br /> <br />

        <span>Repetir Correo : </span>
        <input type={'text'} placeholder='Correo' /> <br /> <br />

        <span>Apellidos : </span>
        <input type={'text'} placeholder='Repetir correo' /> <br /> <br />

        <span>Apellidos : </span>
        <input type={'text'} placeholder='Hola' /> <br /> <br />
        <span>Chileno : </span>
        <input type={'checkbox'} /> <br /> <br />
        <br />

        <div style={{
            display: 'flex',
            gap: '30px',
        }}>

            <input type={'button'} value='Atras'
                className='btn-app btn-app--blue'
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            />
            <input type={'button'} value='Siguiente'
                className='btn-app btn-app--blue'
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            />
        </div>
    </form >

}

const FormController = () => {
    return <>
        <div id="carouselExampleCaptions" className="carousel slide">

            <div className="carousel-indicators indicators-container">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="form-indicator active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='form-indicator' aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='form-indicator' aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className='form-indicator' aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className='form-indicator' aria-label="Slide 5"></button>
            </div>

            <div className="carousel-inner" id='form-controll'>

                <div className="carousel-item active">
                    <span className='text__subject ' >
                        DATOS PERSONALES
                    </span>

                    <TestForm />
                </div>

                <div className="carousel-item">
                    <span className='text__subject ' >
                        VEAMOS COMO FUNCIONA
                    </span>
                    <TestForm />
                </div>

                <div className="carousel-item">
                    <span className='text__subject ' >
                        PRUEBAS UNITARIAS
                    </span>
                    <TestForm />
                </div>

                <div className="carousel-item">
                    <span className='text__subject ' >
                        HABILIDADES TECNICAS
                    </span>
                    <TestForm />
                </div>

                <div className="carousel-item">
                    <span className='text__subject ' >
                        DATOS FINALIZADOS
                    </span>
                    <TestForm />
                </div>

            </div>

        </div>
    </>
}

export default ModalForm