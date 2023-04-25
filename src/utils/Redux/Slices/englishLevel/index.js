import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const englishLevelSlice = createSlice({
    name: "englishLevel",
    initialState: initialState,
    reducers: {
        setEnglishLevel: (state, action) => {
            state.englishLevel = action.payload;
        },
    },
});

export const { setEnglishLevel } = englishLevelSlice.actions;
export default englishLevelSlice.reducer;
