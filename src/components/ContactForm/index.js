import { useState, useEffect } from "react";
import './style.scss';
import { categories } from "../../utils/contactFormCategories";

const formDefault = { name: '', lastName: '', email: '', phone: '', company: '', tags: [], message: '' }
const checkboxDefault = new Array(categories.length).fill(false)

export default function ContactForm() {

    const [form, setForm] = useState(formDefault);
    const [checkboxState, setCheckBoxState] = useState(checkboxDefault);

    const onFormUpdate = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onCheckBoxUpdate = (position) => {
        const updatedCheckBoxState = checkboxState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckBoxState(updatedCheckBoxState);
        setForm({ ...form, tags: Array.from(document.querySelectorAll("input[type=checkbox]:checked"), e => e.name) });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setForm(formDefault);
        setCheckBoxState(checkboxDefault);
    }

    useEffect(() => {
        function checkForm() {
            const invalidForm = document.querySelector('form:invalid');
            const submitBtn = document.getElementById('submit');
            const checkBoxSelected = (form.tags.length > 0)
            if (invalidForm || !checkBoxSelected) {
                submitBtn.setAttribute('disabled', true);
            } else {
                submitBtn.disabled = false;
            }
        };
        checkForm()
      },[form,checkboxState]);

    return (
        <div className="contactForm" id="contactForm">
            <div className="contactForm__container">
                <form onSubmit={handleSubmit}>
                    <h3 className="contactForm__title">Si eres empresa y buscas talento TI, déjanos tu información en este formulario. En breve te contactaremos:</h3>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className="contactForm__text">Nombre *</label>
                            <input type="text" className="contactForm--input" name="name" value={form.name} onChange={onFormUpdate} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="contactForm__text">Apellido *</label>
                            <input type="text" className="contactForm--input" name="lastName" value={form.lastName} onChange={onFormUpdate} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className="contactForm__text">Email corporativo *</label>
                            <input type="email" className="contactForm--input" name="email" value={form.email} onChange={onFormUpdate} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="contactForm__text">Número de teléfono *</label>
                            <input type="phone" className="contactForm--input" name="phone" value={form.phone} onChange={onFormUpdate} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className="contactForm__text">¿A qué empresa perteneces? *</label>
                            <input type="text" className="contactForm--input" name="company" value={form.company} onChange={onFormUpdate} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className="contactForm__text" style={{ marginBottom: "16px" }}>Cargo/área de preferencia que buscas contratar *</label>
                            <ul className="list">
                                {categories.map(({ name, label }, index) => {
                                    return (
                                        <li key={index}>
                                            <input
                                                className="contactForm--check"
                                                type="checkbox"
                                                id={`checkbox-${name}`}
                                                name={name}
                                                checked={checkboxState[index]}
                                                onChange={() => onCheckBoxUpdate(index)}
                                            />
                                            <label className="form-check-label contactForm__text--check" htmlFor={`checkbox-${name}`}>{label}</label>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label className="contactForm__text" style={{ marginTop: "32px", marginBottom: "16px" }}>¿Dudas? Déjalas acá!</label>
                            <textarea type='text' rows='3' className="contactForm--input form-control" name="message" value={form.message} onChange={onFormUpdate} />
                        </div>
                    </div>
                    <button type="submit" className="btn formBtn" id="submit" disabled onSubmit={handleSubmit}>ENVIAR</button>
                </form>
            </div>
        </div >
    )
}
