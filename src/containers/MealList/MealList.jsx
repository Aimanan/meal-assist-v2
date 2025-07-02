import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { TextCard } from "../../components/TextCard/TextCard";

export function MealList() {
  const mealList = useSelector((store) => store.meals.mealList);
  const foodList = useSelector((store) => store.foods.foodList);

  const navigate = useNavigate();
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {mealList.map((meal) => (
        <div key={meal.id} className={s.card_container}>
          <TextCard
            id={meal.id}
            userId={meal.userId}
            consumedFoods={meal.consumedFoods}
            foodList={foodList} // ✅ pass foodList
            timestamp={meal.timestamp}
            review={meal.review}
            onClickTrash={() => alert("onClickTrash()")}
            onClickCard={() => navigate("meal/" + meal.id)}
            onClickUser={() => navigate("user/" + meal.userId)}
          />
        </div>
      ))}
    </div>
  );
}
