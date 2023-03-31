import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const idealJobSlice = createSlice({
  name: "idealJob",
  initialState: initialState,
  reducers: {
    setidealJob: (state, action) => {
      state.idealJob = action.payload;
    },
  }
});

export const { setidealJob } = idealJobSlice.actions;
export default idealJobSlice.reducer;