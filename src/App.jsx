import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useEffect } from "react";
import { MealApi } from "./api/meal-api";
import { useDispatch } from "react-redux";
import { setMealList } from "./store/meals/meals-slice";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  const dispatch = useDispatch();

  async function fetchAllMeals(params) {
    let mealList = await MealApi.fetchAllMeals();
    dispatch(setMealList(mealList));
    //return mealList;
  }

  useEffect(() => {
    // fetchAllMeals().then((result) => {
    //   console.log("Meal result:", result);
    // });
    fetchAllMeals();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
