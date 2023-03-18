import { configureStore } from "@reduxjs/toolkit";

//Reducer
import categoriesReducer from "./Slices/Categories/index";
import empploymentReducer from "./Slices/EmploymentStatus/index";

const store = configureStore({
  reducer: {
    categories: categoriesReducer
  }
});

export default store;
