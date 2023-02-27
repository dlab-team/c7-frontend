import React from 'react'
import './styles.scss'

const UiRegister = () => {
    return <>
        <div className='modal-container'>

            <div className='modal-record'>

                <div className='text__subject'> Regístrate </div>

                <div className='modal-record__form'>
                    <FormRegister />
                </div>
            </div>
        </div>

    </>
}

const FormRegister = () => {

    return <form className="row g-3">

        <div className="col-md-6">
            <label htmlFor="inputNames" className="form-label">Usuario:</label>
            <input type="text" className="form-control form__input" id="inputUserName" placeholder='Robert' required />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputNames" className="form-label">Apellidos:</label>
            <input type="text" className="form-control form__input" id="inputUserLastName" placeholder='Martin Series' required />
        </div>


        <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Ingresa tu correo:</label>
            <input type="email" className="form-control form__input" id="inputEmail4" placeholder='rorbertms@gmail.com' required />
        </div>


        <div className="col-md-12">
            <label htmlFor="inputPassword" className="form-label">Crea tu contraseña:</label>
            <input type="password" className="form-control form__input" id="inputPassword" required />
        </div>

        <div className="col-md-12">
            <label htmlFor="inputPassword2" className="form-label">Reingresa tu contraseña:</label>
            <input type="password" className="form-control form__input" id="inputPassword2" required />
        </div>

        <div className="col-12">
            <button type="submit" className="btn btn-primary">Registrar</button>
        </div>
    </form>
}

export default UiRegister