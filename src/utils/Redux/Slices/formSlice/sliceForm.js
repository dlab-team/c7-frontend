/**
 * SLICE CONTROL FORM
 * 
 * formDataLocalStorage---> {input_nombre:'pedro',input_edad=25}
 * 
 * sincronizeFormLocalStorages() --> envia el LocalStorage al store-redux (hacer 1 sola vez)
 * setFormDataLocalStorage(formEntries) --> agrega tu formulario al store-redux  ({input_nombre:'pedro',input_edad=25})
 * resetFormSlice() --> borra todos los datos del store y LS 
 * 
 */

import { createSlice } from "@reduxjs/toolkit";
const FORMS_NAME_LOCAL_STORAGE = 'DevSafio_Forms'

export const sincronizeFormLocalStorages = () => {
    return async (dispatch, getState) => {
        const localStorage_formsData = await JSON.parse(localStorage.getItem(FORMS_NAME_LOCAL_STORAGE));
        if (!!localStorage_formsData) {
            dispatch(setFormDataLocalStorage({ ...localStorage_formsData }))
        }
    }
}

export const resetFormLocalStorage = () => async (dispatch) => {
    dispatch(resetFormSlice())
    localStorage.removeItem(FORMS_NAME_LOCAL_STORAGE);
}

const initialState = {
    formsNameLocalS: FORMS_NAME_LOCAL_STORAGE,
    formDataLocalStorage: {}
}

const formsLocalStorage = createSlice({
    name: 'formsLS',
    initialState,
    reducers: {
        setFormDataLocalStorage(state, action) {
            const listToSave = action.payload
            if (!!listToSave) {
                state.formDataLocalStorage = { ...state.formDataLocalStorage, ...listToSave }
                localStorage.setItem(FORMS_NAME_LOCAL_STORAGE, JSON.stringify(state.formDataLocalStorage))
            }
        },
        resetFormSlice(state) {
            state.formDataLocalStorage = {}
            localStorage.removeItem(state.formsNameLocalS);
        }
    }
})

export default formsLocalStorage.reducer
export const { resetFormSlice, setFormDataLocalStorage } = formsLocalStorage.actions