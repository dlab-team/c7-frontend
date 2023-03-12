import { createSlice } from "@reduxjs/toolkit";

const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    languages: [],
  },
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const { setLanguages } = languagesSlice.actions;
export default languagesSlice.reducer;
