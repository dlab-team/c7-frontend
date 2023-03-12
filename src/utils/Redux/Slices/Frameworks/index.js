import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const frameworksSlice = createSlice({
  name: "frameworks",
  initialState: initialState,
  reducers: {
    setFrameworks: (state, action) => {
      state.frameworks = action.payload;
    },
  },
});

export const { setFrameworks } = frameworksSlice.actions;
export default frameworksSlice.reducer;
