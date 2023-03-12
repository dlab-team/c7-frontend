import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const toolsSlice = createSlice({
  name: "tools",
  initialState: initialState,
  reducers: {
    setTools: (state, action) => {
      state.tools = action.payload;
    },
  },
});

export const { setTools } = toolsSlice.actions;
export default toolsSlice.reducer;
