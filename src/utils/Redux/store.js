import { configureStore } from "@reduxjs/toolkit";

//Reducer
import categoriesReducer from "./Slices/Categories/index";
import formReducer from "./Slices/Form/index";
import frameworksReducer from "./Slices/Frameworks/index";
import languagesReducer from "./Slices/Languages/index";
import toolsReducer from "./Slices/Tools/index";
import idealJob from "./Slices/IdealJob";
import authDev from "./Slices/authDev";
import userPersonalInfo from "./Slices/UserPersonalInfo";
import rolSlice from "./Slices/rolSlice";
import salarySlice from "./Slices/salarySlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    formData: formReducer,
    frameworks: frameworksReducer,
    languages: languagesReducer,
    tools: toolsReducer,
    idealJob: idealJob,
    authDev:authDev,
    userPersonalInfo:userPersonalInfo,
    rolDevelop:rolSlice,
    salaryExpectative:salarySlice
  },
});

export default store;