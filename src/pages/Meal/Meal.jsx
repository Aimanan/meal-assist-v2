import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MealForm } from "../../components/MealForm/MealForm";
import { useState } from "react";

export function Meal(props) {
  const { mealId } = useParams();
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

  return (
    <>
      {meal && (
        <MealForm
          isEditable={isEditable}
          // userId={user.id}
          review={isEditable ? "Edit meal" : meal.review}
          meal={meal}
          onClickDelete={() => alert("delete")}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
