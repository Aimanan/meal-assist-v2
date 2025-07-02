import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useEffect } from "react";
import { MealApi } from "./api/meal-api";
import { useDispatch } from "react-redux";
import { setMealList } from "./store/meals/meals-slice";
import "bootstrap/dist/css/bootstrap.min.css";
import { setUserList } from "./store/users/users-slice";
import { foodsReducer, setFoodList } from "./store/foods/foods-slice";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllMeals(params) {
    let mealList = await MealApi.fetchAllMeals();
    dispatch(setMealList(mealList));
  }

  async function fetchAllUsers(params) {
    let userList = await MealApi.fetchAllUsers();
    dispatch(setUserList(userList));
  }

  async function fetchAllFoods(params) {
    let foodsList = await MealApi.fetchAllFoods();
    dispatch(setFoodList(foodsList));
  }

  useEffect(() => {
    fetchAllMeals();
    fetchAllUsers();
    fetchAllUsers();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
