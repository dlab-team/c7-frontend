import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: {
        userName: '',
        mail: '',
    },
    rol: 'user' || 'admin',
    accesToken: ''
}

const authDevSlice = createSlice({
    name: "authDev",
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.userName = action.payload.userName;
            state.user.mail = action.payload.mail;
            state.rol = action.payload.rol;
            state.isLoggedIn = true;
            return state;
        },
        logOut: (state) => {
            // state.isLoggedIn = false;
            state = initialState;
            return state;
        },
    }
});

export const { setUser, logOut } = authDevSlice.actions;
export default authDevSlice.reducer;
