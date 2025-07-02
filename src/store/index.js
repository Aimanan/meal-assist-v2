import { configureStore } from "@reduxjs/toolkit";
import { mealsReducer } from "./meals/meals-slice";
import { usersReducer } from "./users/users-slice";
import { foodsReducer } from "./foods/foods-slice";


export const store = configureStore({
  reducer: {
    meals: mealsReducer,
    users: usersReducer,
    foods: foodsReducer
  },
});