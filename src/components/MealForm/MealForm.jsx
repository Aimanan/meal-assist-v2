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
  onSubmit = {},
}) {
  const [formValues, setFormValues] = useState({
    review: meal?.title,
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
    const newFoods = formValues.consumedFoods.filter(
      (current, i) => i !== index
    );
    setFormValues({ ...formValues, consumedFoods: newFoods });
  };

  const actionIcons = (
    <>
      <div className="col-1">
        <PencilFill onClick={onClickEdit} className={s.icon} />
      </div>
      <div className="col-1">
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
      <label className="form-label">userId</label>
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
      <label className="form-label">Consumed Foods</label>
      {formValues.consumedFoods.map((food, index) => (
        <div key={index} className="card p-3 mb-3">
          <div className="row mb-2">
            <div className="col">
              <label className="form-label">Food Name</label>
              <input
                type="text"
                className="form-control"
                value={food.foodName}
                onChange={(e) =>
                  handleFoodChange(index, "foodName", e.target.value)
                }
              />
            </div>
            <div className="col">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-control"
                value={food.amount}
                onChange={(e) =>
                  handleFoodChange(index, "amount", e.target.value)
                }
              />
            </div>
            <div className="col">
              <label className="form-label">Unit</label>
              <input
                type="text"
                className="form-control"
                value={food.unit}
                onChange={(e) =>
                  handleFoodChange(index, "unit", e.target.value)
                }
              />
            </div>
            <div className="col">
              <label className="form-label">Calories</label>
              <input
                type="number"
                className="form-control"
                value={food.calories}
                onChange={(e) =>
                  handleFoodChange(index, "calories", e.target.value)
                }
              />
            </div>
            <div className="col d-flex align-items-end">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleRemoveFood(index)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <button type="button" className="btn btn-primary" onClick={handleAddFood}>
        Add Food
      </button>
    </>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{review}</h2>
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${s.review_input_container}`}>
        {isEditable && reviewInput}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        {isEditable && userIdInput}
      </div>
      <div className="mb-3">
        {isEditable ? (
          consumedFoodsInput
        ) : (
          <div>
            {meal.consumedFoods.map((item, index) => (
              <div key={index}>
                {item.foodName} — {item.amount} {item.unit} ({item.calories}{" "}
                kcal)
              </div>
            ))}
          </div>
        )}
      </div>
      {onSubmit && submitBtn}
    </div>
  );
}
