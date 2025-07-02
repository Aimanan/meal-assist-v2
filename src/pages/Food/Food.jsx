import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FoodForm } from "../../components/FoodForm/FoodForm";
import { useState } from "react";

export function Food(props) {
  const { foodId } = useParams();
  const food = useSelector((store) =>
    store.foods.foodList.find((food) => food.id === foodId)
  );

  const [isEditable, setIsEditable] = useState(false);

  const submit = (formValues) => {
    alert("submit");
  };

  return (
    <>
      {food && (
        <FoodForm
          isEditable={isEditable}
          food={food}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
