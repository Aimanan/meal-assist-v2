import { useDispatch, useSelector } from "react-redux";
import { MealApi } from "../../api/meal-api";
import { MealForm } from "../../components/MealForm/MealForm";
import { useNavigate, useParams } from "react-router-dom";
import { addMeal } from "../../store/meals/meals-slice";

export function MealCreate(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { userId } = useParams();
  // const user = useSelector((store) =>
  //   store.users.userList.find((user) => user.id === userId)
  // );

  const submit = async (formValues) => {
    const createdMeal = await MealApi.createMeal({
      // userId: user.id,
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });

    dispatch(addMeal(createdMeal));
    alert("A meal has been created");
    navigate("/");
  };
  return (
    <>
      <MealForm title="New meal" onSubmit={submit} />
    </>
  );
}
