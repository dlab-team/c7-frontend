import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  }
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
