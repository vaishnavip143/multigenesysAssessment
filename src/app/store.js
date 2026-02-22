import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../feature/employees/employeeSlice";
import countryReducer from "../feature/countries/countrySlice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    countries: countryReducer,
  },
});
