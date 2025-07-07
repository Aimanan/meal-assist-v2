import { useSelector } from "react-redux";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MealList } from "../../containers/MealList/MealList";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export function MealBrowse(props) {
  const mealList = useSelector((store) => store.meals.mealList);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMealList = mealList.filter((meal) => {
    const containsFood = meal.consumedFoods.some((food) =>
      food.foodName
        .trim()
        .toUpperCase()
        .includes(searchTerm.trim().toUpperCase())
    );

    const containsReview = meal.review
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());

    return containsFood || containsReview;
  });

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-7 mt-3">
          <SearchBar
            classname={s.container}
            onTextChange={setSearchTerm}
            placeholder="Search your meals..."
          />
        </div>
      </div>
      {mealList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any meal, do you want to{" "}
            <Link to="/meal/new">create one</Link>
          </span>
        </div>
      )}
      <MealList mealList={filteredMealList} />
    </>
  );
}
