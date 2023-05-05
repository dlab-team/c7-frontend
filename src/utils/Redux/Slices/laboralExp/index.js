import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const laborExpSlice = createSlice({
    name: "laboralExp",
    initialState: initialState,
    reducers: {
        setLaboralExp: (state, action) => {
            state.laboralExp = action.payload;
        },
    },
});

export const { setLaboralExp } = laborExpSlice.actions;
export default laborExpSlice.reducer;
