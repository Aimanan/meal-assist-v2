import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { MealForm } from "../../components/MealForm/MealForm";
import { useState } from "react";
import { MealApi } from "../../api/meal-api";
import { deleteMeal } from "../../store/meals/meals-slice";

export function Meal(props) {
  const { mealId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const meal = useSelector((store) =>
    store.meals.mealList.find((meal) => meal.id === mealId)
  );

  const { userId } = useParams();
  const user = useSelector((store) =>
    store.users.userList.find((user) => user.id === userId)
  );

  const [isEditable, setIsEditable] = useState(false);

  const submit = (formValues) => {
    alert("submit");
  };

  async function deleteMeal_() {
    if (window.confirm("Delete meal ?")) {
      MealApi.deleteById(meal.id);
      dispatch(deleteMeal(meal));
      navigate("/");
    }
  }

  return (
    <>
      {meal && (
        <MealForm
          isEditable={isEditable}
          // userId={user.id}
          review={isEditable ? "Edit meal" : meal.review}
          meal={meal}
          onClickDelete={deleteMeal_}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
