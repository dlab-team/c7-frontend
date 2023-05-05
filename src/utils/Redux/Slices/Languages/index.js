import { createSlice } from "@reduxjs/toolkit";

const initialState = {
}

const languagesSlice = createSlice({
  name: "languages",
  initialState: initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    addLanguage: (state, action) => {
      state.languages = [action.payload, ...state.languages];
    },
    deleteLanguage: (state, action) => {
      state.languages = [...state.languages.filter(elem => elem.name !== action.payload)];
    },
    modifyLanguage: (state, action) => {
      state.languages = [
        ...state.languages
          .map((langX) =>
            (langX.name === action.payload.name)
              ? { name: action.payload.name, value: action.payload.value }
              : langX
          )
      ]
    },
    setLangSelected: (state, action) => {
      state.selecteds = action.payload;
    },
    setLangFavorites: (state, action) => {
      state.favorites = action.payload;
    }
  },
});

export const { setLanguages, addLanguage, deleteLanguage, setLangSelected, modifyLanguage, setLangFavorites } = languagesSlice.actions;
export default languagesSlice.reducer;
