import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const FormSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = FormSlice.actions;
export default FormSlice.reducer;
