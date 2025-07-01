import { configureStore } from "@reduxjs/toolkit";
import { mealsReducer } from "./meals/meals-slice";

export const store = configureStore({
  reducer: {
    meals: mealsReducer
  
  },
});