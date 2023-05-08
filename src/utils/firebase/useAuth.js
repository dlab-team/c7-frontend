import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, TwitterAuthProvider } from 'firebase/auth'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { setUser, logOut } from '../Redux/Slices/authDev'
import { useMemo } from 'react'

export const useAuth = () => {
    const dispatch = useDispatch()

    //logearce con un correo y contraseña ya creados en la bd
    async function loginWithMail(mailUser, password) {
        try {
            const signIn = await signInWithEmailAndPassword(auth, mailUser, password)
            return true
        } catch (e) {
            return false;
        }
    }

    //crea un usuario por el correo y contraseña
    async function createUserFireBase(mailUser, password, handleAcept = false) {
        try {
            const userCreated = await createUserWithEmailAndPassword(auth, mailUser, password)
            return true
        } catch (e) {
            return false;
        }
    }

    //cuando se cambie de usuario hace el callback
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser?.displayName) {
            dispatch(setUser({
                userName: currentUser?.displayName.split(' ')[0],
                mail: currentUser?.email,
                rol: 'user'
            }))
        }
    })



    async function logOutAuth() {
        await signOut(auth)
            .then(() => {
                dispatch(logOut())
                return true
            })
            .catch((e) => {
                return e.message
            })
    }

    // Para google creamos un prvider de google y 
    // de ahi hacemos la autenticacion

    async function signInWithGoogle(handleResponse = false, errorFunction = false) {
        const googleProvider = new GoogleAuthProvider();
        wrapperAuth(googleProvider, handleResponse, errorFunction)
    }
    // gitHub
    // https://github.com/settings/applications/new
    async function signInWithTwitter(handleResponse = false, errorFunction = false) {
        const twitterProvider = new TwitterAuthProvider();
        wrapperAuth(twitterProvider, handleResponse, errorFunction)
    }

    // gitHub
    // https://github.com/settings/applications/new
    async function signInWithGit(handleResponse = false, errorFunction = false) {
        const gitProvider = new GithubAuthProvider();
        wrapperAuth(gitProvider, handleResponse, errorFunction)
    }

    // wraper function generic
    async function wrapperAuth(providerX, handleResponse, handleError) {

        await signInWithPopup(auth, providerX)
            .then((auth_response) => {
                const { _tokenResponse } = auth_response

                if (handleResponse) {
                    handleResponse(_tokenResponse)
                }
                return auth_response;
            })
            .catch((e) => {
                if (handleError)
                    if (e.message.includes('exists-with-different-credential'))
                        handleError('Existe un usuario con esas credenciales.')
            })

    }

    return { signInWithGoogle, signInWithGit, logOutAuth, signInWithTwitter }
}