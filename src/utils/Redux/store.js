import { configureStore } from "@reduxjs/toolkit";

//Reducer
import categoriesReducer from "./Slices/Categories/index";
import frameworksReducer from "./Slices/Frameworks/index";
import languagesReducer from "./Slices/Languages/index";
import toolsReducer from "./Slices/Tools/index";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    frameworks: frameworksReducer,
    languages: languagesReducer,
    tools: toolsReducer,
  },
});

export default store;
