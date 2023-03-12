import { createSlice } from "@reduxjs/toolkit";

const toolsSlice = createSlice({
  name: "tools",
  initialState: {
    tools: [],
  },
  reducers: {
    setTools: (state, action) => {
      state.tools = action.payload;
    },
  },
});

export const { setTools } = toolsSlice.actions;
export default toolsSlice.reducer;
