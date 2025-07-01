import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    mealList: [],
  },
  reducers: {
    setMealList: (state, action) => {
      state.mealList = action.payload;
    },
  },
});

export const { setMealList } = mealsSlice.actions;
export const mealsReducer = mealsSlice.reducer;