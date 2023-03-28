import { configureStore } from "@reduxjs/toolkit";

//Reducer
import categoriesReducer from "./Slices/Categories/index";
import formReducer from "./Slices/Form/index";
import frameworksReducer from "./Slices/Frameworks/index";
import languagesReducer from "./Slices/Languages/index";
import toolsReducer from "./Slices/Tools/index";
import idealJob from "./Slices/IdealJob";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    formData: formReducer,
    frameworks: frameworksReducer,
    languages: languagesReducer,
    tools: toolsReducer,
    idealJob: idealJob,
  },
});

export default store;