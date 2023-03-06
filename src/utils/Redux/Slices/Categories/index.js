import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [
      {
        name: "Front End",
        label: "Desarrollador Front End"
      },
      {
        name: "Full Stack",
        label: "Desarrollador Full Stack / Backend"
      },
      {
        name: "UX/UI",
        label: "Diseñador UX/UI"
      },
      {
        name: "QA",
        label: "Analista QA"
      },
      {
        name: "Mobile",
        label: "Desarrollador Mobile"
      },
      {
        name: "Datos",
        label: "Datos"
      },
      {
        name: "Otra",
        label: "Otra"
      }
    ]
  },
  reducers: {}
});

export default categoriesSlice.reducer;
