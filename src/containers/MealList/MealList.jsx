import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { TextCard } from "../../components/TextCard/TextCard";
import { MealApi } from "../../api/meal-api";
import { deleteMeal } from "../../store/meals/meals-slice";

export function MealList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mealList = useSelector((store) => store.meals.mealList);
  const foodList = useSelector((store) => store.foods.foodList);

  async function deleteMeal_(meal) {
    if (window.confirm("Delete meal ?")) {
      MealApi.deleteById(meal.id);
      dispatch(deleteMeal(meal));
    }
  }

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {mealList.map((meal) => (
        <div key={meal.id} className={s.card_container}>
          <TextCard
            id={meal.id}
            userId={meal.userId}
            consumedFoods={meal.consumedFoods}
            foodList={foodList}
            timestamp={meal.timestamp}
            review={meal.review}
            onClickTrash={() => deleteMeal_(meal)}
            onClickCard={() => navigate("meal/" + meal.id)}
            onClickUser={() => navigate("user/" + meal.userId)}
          />
        </div>
      ))}
    </div>
  );
}
