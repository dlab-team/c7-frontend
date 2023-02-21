import React from 'react'
import './styles.scss'

const Ui_register = () => {
    return <>
        <div className='modal--login--container'>
            <div className='modal--login'>

                <div className='subject--text--title'> Regístrate </div>

                <div className='modal--text'>

                    <FormRegister />
                </div>

                <div className='modal--container--buttons'>
                </div>

            </div>
        </div>

    </>
}

const FormRegister = () => {
    return <form className="row g-3">

        <div className="col-md-6">
            <label htmlFor="inputNames" className="form-label">Usuario:</label>
            <input type="text" className="form-control" id="inputUserName" placeholder='Robert' required />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputNames" className="form-label">Apellidos:</label>
            <input type="text" className="form-control" id="inputUserLastName" placeholder='Martin Series' required />
        </div>


        <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">Ingresa tu correo:</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder='rorbertms@gmail.com' required />
        </div>


        <div className="col-md-12">
            <label htmlFor="inputPassword" className="form-label">Crea tu contraseña:</label>
            <input type="password" className="form-control" id="inputPassword" required />
        </div>

        <div className="col-md-12">
            <label htmlFor="inputPassword2" className="form-label">Reingresa tu contraseña:</label>
            <input type="password" className="form-control" id="inputPassword2" required />
        </div>

        <div className="col-12">
            <button type="submit" className="btn btn-primary">Registrar</button>
        </div>
    </form>
}

export default Ui_register