import { configureStore } from "@reduxjs/toolkit";

//Reducer
import categoriesReducer from "./Slices/Categories/index";
import formReducer from "./Slices/Form/index";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    formData: formReducer,
  }
});

export default store;
