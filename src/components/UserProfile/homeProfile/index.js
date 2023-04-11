import React from 'react'
import CardProfile from '../cardProfile'
import './homeProfile.scss'

const HomeUserProfile = () => {
    return (
        <div className='home-profile'>
            <div className='home-profile__title  text__title--medium'>¡Bienvenido!</div>
            <div className='home-profile__subject text--normal'>Mapa para recibir ofertas automáticas</div>
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