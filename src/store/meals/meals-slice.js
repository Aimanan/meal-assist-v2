import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    mealList: [],
  },
  reducers: {
    setMealList: (state, action) => {
      state.mealList = action.payload.map(formatId);
    },
    addMeal: (state, action) => {
      state.mealList.push(formatId(action.payload));
    },
    updateMeal: (currentSlice, action) => {
      const indexToUpdate = currentSlice.mealList.findIndex(
        (meal) => meal.id === action.payload.id
      );
      currentSlice.mealList[indexToUpdate] = action.payload;
    },
    deleteMeal: (currentSlice, action) => {
      const filteredMealList = currentSlice.mealList.filter(
        (meal) => meal.id !== action.payload.id
      );
      currentSlice.mealList = filteredMealList;
    },
  },
});

function formatId(meal) {
  return {
    ...meal,
    id: meal.id.toString(),
  };
}

export const { setMealList, addMeal, updateMeal, deleteMeal } = mealsSlice.actions;
export const mealsReducer = mealsSlice.reducer;