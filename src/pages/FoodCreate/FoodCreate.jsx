import { useDispatch, useSelector } from "react-redux";
import { MealApi } from "../../api/meal-api";

import { useNavigate, useParams } from "react-router-dom";
import { addFood } from "../../store/foods/foods-slice";
import { FoodForm } from "../../components/FoodForm/FoodForm";

export function FoodCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async (formValues) => {
    const createdFood = await MealApi.createFood({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });

    dispatch(addFood(createdFood));
    alert("A food has been created");
    navigate("/");
  };
  return (
    <>
      <FoodForm title="New food" onSubmit={submit} />
    </>
  );
}
