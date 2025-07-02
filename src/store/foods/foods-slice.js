import { createSlice } from "@reduxjs/toolkit";

export const foodsSlice = createSlice({
  name: "foods",
  initialState: {
    foodList: [],
  },
  reducers: {
    setFoodList: (state, action) => {
      state.foodList = action.payload.map(formatId);
    },
    addFood: (state, action) => {
      state.foods.foodList.push(formatId(action.payload));
    },
  },
});

function formatId(food) {
  return {
    ...food,
    id: food.id.toString(),
  };
}

export const { setFoodList } = foodsSlice.actions;
export const foodsReducer = foodsSlice.reducer;