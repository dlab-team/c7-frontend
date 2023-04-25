import React, { useEffect, useState } from 'react'
import ModalModify from '../modalModify/ModalModify'
import swal from 'sweetalert';
import { Coin } from 'react-bootstrap-icons';
import { rolsDeveloper } from '../../../utils/rolsDeveloper';
import { useDispatch, useSelector } from 'react-redux';
import { setRol } from '../../../utils/Redux/Slices/rolSlice';
import { setSalaryExpectative } from '../../../utils/Redux/Slices/salarySlice';

const RolSalaryModify = ({ showModal, handleShow }) => {
    const rolDeveloper = useSelector((store) => store.rolDevelop.rol)
    const salaryExp = useSelector((store) => store.salaryExpectative.salaryExp)

    const dispatch = useDispatch()

    const initialState = {}
    const [form, setForm] = useState(initialState);

    useEffect(() => {
        setForm({ salary: salaryExp })
    }, [salaryExp, rolDeveloper])


    const onFormUpdate = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const updateSalary = (e) => {
        setForm({ ...form, salary: Math.abs(e.target.value) })
    }
    const handleResetState = () => {
        setForm({ initialState })
    }
    const handleCloseModal = () => handleShow(false);

    const bodyM = <div className='rol-edit d-flex flex-column'>
        <div className='rol-edit__years'>
            {
                rolsDeveloper.map(({ name, value }) => {
                    if (value !== rolDeveloper)
                        return <div className='d-flex align-items-center' key={name + value}>
                            <input
                                type="radio" id={value}
                                onClick={onFormUpdate}
                                name="rol_develop"
                                value={name}
                                className='m-2'

                            />
                            <label htmlFor={value} >{name}</label>
                        </div>
                })
            }
        </div>
        <div className='rol-edit__english'>
            <hr />
            <div className='fs-4 mb-3'><Coin className='fs-5 me-3' />Cambiar expectativa de renta:</div>
            <input className='form-control border-primary' type='number' onChange={updateSalary}
                defaultValue={form.salary} />
        </div>
    </div>

    const handleAcceptModal = () => {
        let resp = [];

        if (form?.rol_develop || form?.salary) {

            if (form.salary) {
                resp.push('Salario')
                dispatch(setSalaryExpectative(form.salary))
            }
            if (form.rol_develop) {
                dispatch(setRol(form.rol_develop))
                resp.push('Rol de desarrollador')
            }
        }

        swal({
            title: [...resp],
            text: "cambiado exitosamente!",
            icon: "success",
        });
        handleResetState()
        handleCloseModal()
    }

    const handleError = () => {
        swal({
            title: "Lo sentimos",
            text: "No pudieron hacerce los cambios exitosamente!! Intente de nuevo",
            icon: "error",
        });
        handleCloseModal()
    }
    return (
        <ModalModify
            tittle={'Cambiar rol'}
            btnOk='Aceptar'
            show={showModal}
            handleClose={handleCloseModal}
            handleOk={handleAcceptModal}
            handleError={handleError}
            modalBody={bodyM}
        />
    )
}

export default RolSalaryModify