import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const languagesSlice = createSlice({
  name: "languages",
  initialState: initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setLangSelected: (state, action) => {
      state.selecteds = action.payload;
    },
    setLangFavorites: (state, action) => {
      state.favorites = action.payload;
    }
  },
});

export const { setLanguages, setLangSelected, setLangFavorites } = languagesSlice.actions;
export default languagesSlice.reducer;
