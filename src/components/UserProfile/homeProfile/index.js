import React from 'react'
import CardProfile from '../cardProfile'
import './homeProfile.scss'

const HomeUserProfile = () => {
    return (
        <div className='home-profile'>
            <div className='home-profile__title  text__title--medium'>¡Bienvenido!</div>
            <div className='home-profile__subject text--normal'>Estamos emocionados de tenerlo(a)
             aquí y ayudar a conectarlo con oportunidades laborales emocionantes en su campo. A continuación, le mostraremos sencillos 
            pasos que debe seguir para recibir ofertas laborales. 
            ¡Gracias por unirse a la comunidad de <span className='text-primary fw-normal'> 
            DevSafio </span>y esperamos ayudarlo(a) 
            en su carrera en tecnología!</div>
            <div className='home-profile__cards'>

                <div className='profile-card'>
                    <CardProfile numberCard={'1'} textCard={'Completa tu perfil de usuario'} />
                </div>

                <div className='profile-card'>
                    <CardProfile numberCard={'2'} textCard={'Realiza tests técnicos'} />
                </div>

                <div className='profile-card'>
                    <CardProfile numberCard={'3'} textCard={'Participa en Show The Codes'} />
                </div>

                <div className='profile-card'>
                    <CardProfile numberCard={'4'} textCard={'Recibe ofertas de trabajo'} />
                </div>

            </div>

        </div>
    )
}

export default HomeUserProfile