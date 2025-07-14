import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { useState } from "react";

export function MealForm({
  isEditable = true,
  user,
  meal,
  review,
  onClickEdit,
  onClickDelete,
  onSubmit = () => {},
}) {
  const [formValues, setFormValues] = useState({
    review: meal?.title || "",
    userId: user?.id || 1,
    consumedFoods: meal?.consumedFoods || [],
  });

  const updateFormValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFoodChange = (index, field, value) => {
    const newFoods = [...formValues.consumedFoods];
    newFoods[index] = {
      ...newFoods[index],
      [field]:
        field === "amount" || field === "calories" ? Number(value) : value,
    };
    setFormValues({ ...formValues, consumedFoods: newFoods });
  };

  const handleAddFood = () => {
    setFormValues({
      ...formValues,
      consumedFoods: [
        ...formValues.consumedFoods,
        { foodName: "", amount: 0, unit: "", calories: 0 },
      ],
    });
  };

  const handleRemoveFood = (index) => {
    const newFoods = formValues.consumedFoods.filter((_, i) => i !== index);
    setFormValues({ ...formValues, consumedFoods: newFoods });
  };

  const actionIcons = (
    <>
      <div className="col-auto">
        <PencilFill onClick={onClickEdit} className={s.icon} />
      </div>
      <div className="col-auto">
        <TrashFill onClick={onClickDelete} className={s.icon} />
      </div>
    </>
  );

  const reviewInput = (
    <>
      <label className="form-label">Review</label>
      <input
        type="text"
        name="review"
        className="form-control"
        value={formValues.review}
        onChange={updateFormValues}
      />
    </>
  );

  const userIdInput = (
    <>
      <label className="form-label">User ID</label>
      <input
        type="text"
        name="userId"
        className="form-control"
        value={formValues.userId}
        onChange={updateFormValues}
      />
    </>
  );

  const consumedFoodsInput = (
    <>
      <div className="table-container">
        <table className={s.food_table}>
          <thead>
            <tr>
              <th>Food</th>
              <th>Amount</th>
              <th>Unit</th>
              <th>Calories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {formValues.consumedFoods.map((food, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={food.foodName}
                    onChange={(e) =>
                      handleFoodChange(index, "foodName", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={food.amount}
                    onChange={(e) =>
                      handleFoodChange(index, "amount", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={food.unit}
                    onChange={(e) =>
                      handleFoodChange(index, "unit", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={food.calories}
                    onChange={(e) =>
                      handleFoodChange(index, "calories", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemoveFood(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleAddFood}>
        Add Food
      </button>
    </>
  );

  const readOnlyFoods = (
    <div className="table-container">
      <table className={s.food_table}>
        <thead>
          <tr>
            <th>Food</th>
            <th>Amount</th>
            <th>Unit</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {meal?.consumedFoods?.length > 0 ? (
            meal.consumedFoods.map((item, index) => (
              <tr key={index}>
                <td>{item.foodName}</td>
                <td>{item.amount}</td>
                <td>{item.unit}</td>
                <td>{item.calories}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No foods recorded
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col">
          <h2 className="mb-3">{review}</h2>
        </div>
        {actionIcons}
      </div>

      {isEditable && (
        <>
          <div className={`mb-3 ${s.review_input_container}`}>
            {reviewInput}
          </div>
          <div className={`mb-3 ${s.review_input_container}`}>
            {userIdInput}
          </div>
        </>
      )}

      <div className="mb-3">
        {isEditable ? consumedFoodsInput : readOnlyFoods}
      </div>

      {onSubmit && (
        <div className={s.submit_btn}>
          <ButtonPrimary onClick={() => onSubmit(formValues)}>
            Submit
          </ButtonPrimary>
        </div>
      )}
    </div>
  );
}
