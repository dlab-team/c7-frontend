import React from 'react';
import { NavLink } from 'react-router-dom';

import './FormView.scss';

const FormView = () => {
    return (
        <section className="bigBox mx-auto my-12 container">
            <div className="whiteText">  
                <h2 className="text-4xl font-bold pb-8 font-sans ">
                ¡POSTULA Y ÚNETE A DEVSAFÍO!
                </h2>
                <p className="font-extralight font-sans text-lg tracking-wide leading-relaxed py-3">
                Devsafio es una iniciativa que une talento junior Latinoamericano
                (trainee, bootcamp, entre otros) con mentores senior TI para potenciar
                su empleabilidad inicial e impactar la industria tecnológica.
                </p>
                <p className="font-extralight font-sans text-lg tracking-wide leading-relaxed py-3">
                Si estás{' '}
                <strong>
                    buscando empleo como Junior o Trainee (Desarrollo, Diseño UX/UI y Data
                    Science)
                </strong>{' '}
                te dejamos este formulario para que seas parte de distintas ofertas
                laborales que tenemos junto a importantes empresas en latinoamérica.
                </p>
        
                <h3 className="py-3 font-bold font-sans text-2xl md:text-lg">
                ¿Debo pagar algo por inscribirme y participar?
                </h3>
                <p className="font-extralight font-sans text-lg tracking-wide leading-relaxed py-3">
                ¡No! Participar en nuestras ofertas{' '}
                <strong>no tiene costo para ti.</strong> Una vez seas seleccionado para
                la contratación, se te hará una oferta remunerada inferior a la de
                mercado, sin embargo, tendrás el{' '}
                <strong>
                    beneficio y la garantía de ser apoyado y guiado de forma personalizada
                    por un mentor senior.
                </strong>{' '}
                Este programa tiene una duración de 3 meses, posterior a esto tienes la
                posibilidad de ser contratado directamente por la empresa, con sus
                distintos beneficios y remuneración acorde al mercado.
                </p>
                <p className="font-extralight font-sans tracking-wide leading-relaxed py-3 text-xs md:text-base ">
                Si quieres saber más de nosotros y nuestras actividades, nos puedes
                seguir en: https://www.linkedin.com/company/devsafio
                </p>
                <p className="py-3 font-sans text-lg">¡Vamos con todo!</p>
                <p className="py-3 font-sans text-lg">
                <strong>Tiempo: 5-10 minutos</strong>
                </p>
                <button className="blueBtn" id="LayoutWorkProfile">
                    <NavLink className="nav-link" to='/carrousel'>¡POSTULAR!</NavLink>
                </button>
            </div>
        </section>
        );
    };
            
export default FormView;