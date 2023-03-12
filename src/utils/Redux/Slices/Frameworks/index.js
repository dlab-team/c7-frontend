import { createSlice } from "@reduxjs/toolkit";

const frameworksSlice = createSlice({
  name: "frameworks",
  initialState: {
    frameworks: [],
  },
  reducers: {
    setFrameworks: (state, action) => {
      state.frameworks = action.payload;
    },
  },
});

export const { setFrameworks } = frameworksSlice.actions;
export default frameworksSlice.reducer;
