import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { FoodCard } from "../../components/FoodCard/FoodCard";

export function FoodList() {
  const foodList = useSelector((store) => store.foods.foodList);
  const navigate = useNavigate();
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {foodList.map((food) => (
        <div key={food.id} className={s.card_container}>
          <FoodCard
            id={food.id}
            name={food.name}
            calories={food.calories}
            content={food.content}
            totalFat={food.totalFat}
            sodium={food.sodium}
            totalCarbohydrates={food.totalCarbohydrates}
            protein={food.protein}
            vitamins={food.vitamins}
            generalInfo={food.generalInfo}
            onClickCard={() => navigate(food.id)}
          />
        </div>
      ))}
    </div>
  );
}
