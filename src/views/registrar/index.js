import React from 'react'
import './registrar.scss'

const UiRegister = () => {
    return <>
        <div className='modal-container'>

            <div className='modal-record'>

                <div className='text__subject'> Inicia Sesión </div>

                <div className='modal-record__form'>
                    <FormRegister />
                </div>
            </div>
        </div>

    </>
}

const FormRegister = () => {

    return <form className="row g-3">

        <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Ingresa tu correo:</label>
            <input type="email" className="form-control form__input" id="inputEmail4" placeholder='rorbertms@gmail.com' required />
        </div>


        <div className="col-md-12">
            <label htmlFor="inputPassword" className="form-label">Contraseña:</label>
            <input type="password" className="form-control form__input" id="inputPassword" required />
        </div>

        <div className="col-12">
            <button type="submit" className="btn btn-primary">Ingresar</button>
        </div>
    </form>
}

export default UiRegister