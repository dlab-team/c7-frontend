import React, { useState } from 'react';
import { Envelope, Google, Linkedin, Twitter, Github } from 'react-bootstrap-icons'
import { NavLink, useNavigate } from 'react-router-dom';
import './login.scss';
import { useAuth } from '../../utils/firebase/useAuth';
import { useDispatch } from 'react-redux';
import { setPersonalInfo } from '../../utils/Redux/Slices/UserPersonalInfo';
import swal from 'sweetalert';
const UiLogin = () => {

    const { signInWithGoogle, signInWithGit, signInWithTwitter } = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const alexPersonalInfo = {
        name: "Alex",
        lastName: "Fernandez",
        country: "Chile",
        email: "alexfernand@gmail.com",
        phone: "+1 652 687 452",
        linkedInLink: "https://www.linkedin.com/li/alexfernandez",
        gitHubLink: "https://www.github.com/git/alexfernandez",
        portfolioLink: "zzz.alexfernandez.com",
    }

    const showError = (msg) => swal({
        title: "Falló",
        text: msg,
        icon: "error",
    });

    const handleGoogleLogin = async () => {
        const userX = {
            name: "",
            lastName: "",
            country: "",
            email: "",
            phone: "",
            linkedInLink: "",
            gitHubLink: "",
            portfolioLink: "",
        }

        try {
            signInWithGoogle((userG) => {
                userX.name = userG?.firstName
                userX.lastName = userG?.lastName
                userX.email = userG?.email;
                userX.photo = userG?.photoUrl;
                userX.phone = userG?.phoneNumber;
                dispatch(setPersonalInfo(userX));
                navigate('/')
            },
                showError)
        } catch (errorMessage) {

        }
    }

    const handleTwitter = async () => {
        const userX = {
            name: "",
            lastName: "",
            country: "",
            email: "",
            phone: "",
            linkedInLink: "",
            gitHubLink: "",
            portfolioLink: "",
        }

        try {
            await signInWithTwitter(
                (userG) => {
                    userX.name = userG?.fullName.split(' ')[0]
                    userX.lastName = userG?.fullName.split(' ')[1]
                    userX.email = userG?.email;
                    userX.photo = userG?.photoUrl;
                    userX.phone = userG?.phoneNumber;
                    userX.gitHubLink = userG?.phoneNumber;
                    dispatch(setPersonalInfo(userX));
                    navigate('/')
                },
                showError
            )
        } catch (errorMessage) {

        }
    }

    const handleGitLogin = async () => {
        const userX = {
            name: "",
            lastName: "",
            country: "",
            email: "",
            phone: "",
            linkedInLink: "",
            gitHubLink: "",
            portfolioLink: "",
        }

        try {
            await signInWithGit(
                (userG) => {
                    userX.name = userG?.fullName.split(' ')[0]
                    userX.lastName = userG?.fullName.split(' ')[1]
                    userX.email = userG?.email;
                    userX.photo = userG?.photoUrl;
                    userX.phone = userG?.phoneNumber;
                    userX.gitHubLink = userG?.phoneNumber;
                    dispatch(setPersonalInfo(userX));
                    navigate('/')
                },
                showError
            )
        } catch (errorMessage) {
          
        }
    }


    return (
        <>
            <div className='login-container'>

                <div className='login-modal'>
                    <div className='text__subject'> Unete a Devsafío </div>

                    <div className='login-modal__text'>
                        <span>Crea tu cuenta profesional en DevSafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</span>
                    </div>

                    <div className='login-modal__box-buttons'>
                        <NavLink className="nav-link text-light" to='/loginEmail' ><button className='btn-app login-modal__button btn-app--white btn--border'> <Envelope className='login--icons' />  Ingresa con tu E-Mail</button></NavLink>
                        <button onClick={handleGoogleLogin} className='btn-app login-modal__button btn-app--white btn--border'><Google className='login--icons' /> Ingresa con tu Google</button>
                        {/* <button className='btn-app login-modal__button btn--linkedin'><Linkedin className='login--icons' />Ingresa con tu LinkedIn</button> */}
                        <button onClick={handleTwitter} className='btn-app login-modal__button btn--github'><Twitter className='login--icons' />Ingresa con tu Twitter</button>
                        <button onClick={handleGitLogin} className='btn-app login-modal__button btn--twitter'><Github className='login--icons' />Ingresa con tu GitHub</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UiLogin