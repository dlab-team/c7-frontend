import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "Bernand",
    lastName: "Eich",
    country: "EEUU",
    email: "bernandeich@gmail.com",
    phone: "+1 652 687 452",
    linkedInLink: "https://www.linkedin.com",
    gitHubLink: "",
    portfolioLink: "",
  },
};

const userPersonalInfo = createSlice({
  name: "userPersonalInfo",
  initialState: initialState,
  reducers: {
    setPersonalInfo: (state, action) => {
      state.user.name = action.payload.name;
      state.user.lastName = action.payload.lastName;
      state.user.country = action.payload.country;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.linkedInLink = action.payload.linkedInLink;
      state.user.gitHubLink = action.payload.gitHubLink;
      state.user.portfolioLink = action.payload.portfolioLink;
      return state;
    },
    setDefaultPersonalInfo: (state) => {
      // state.isLoggedIn = false;
      state = initialState;
      return state;
    },
  },
});

export const { setPersonalInfo, setDefaultPersonalInfo } =
  userPersonalInfo.actions;
export default userPersonalInfo.reducer;
