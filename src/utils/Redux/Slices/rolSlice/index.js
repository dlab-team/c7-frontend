import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const rolSlice = createSlice({
    name: "rolDevelop",
    initialState: initialState,
    reducers: {
        setRol: (state, action) => {
            state.rol = action.payload;
        },
    }
});

export const { setRol } = rolSlice.actions;
export default rolSlice.reducer;