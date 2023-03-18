import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const employmentSlice = createSlice({
  name: "employmentStatus",
  initialState: initialState,
  reducers: {
    setEmploymentStatus: (state, action) => {
      state.employmentStatus = action.payload;
    },
  },
});

export const { setEmploymentStatus } = employmentSlice.actions;
export default employmentSlice.reducer;
