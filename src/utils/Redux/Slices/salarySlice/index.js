import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    salaryExp: 0.00
}

const salarySlice = createSlice({
    name: "salaryExpectative",
    initialState: initialState,
    reducers: {
        setSalaryExpectative: (state, action) => {
            state.salaryExp = action.payload;
        },
    }
});

export const { setSalaryExpectative } = salarySlice.actions;
export default salarySlice.reducer;