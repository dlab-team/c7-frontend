import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    aviable: [],
}

const aviableWorkSlice = createSlice({
    name: "aviableWork",
    initialState: initialState,
    reducers: {
        setAvibility: (state, action) => {
            state.aviable = action.payload;
        },
    }
});

export const { setAvibility } = aviableWorkSlice.actions;
export default aviableWorkSlice.reducer;