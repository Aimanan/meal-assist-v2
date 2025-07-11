import { useState } from "react";
import s from "./style.module.css";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

export function FoodForm({ food = {}, onSubmit = () => {} }) {
  const [formValues, setFormValues] = useState({
    id: food.id || "",
    name: food.name || "",
    calories: food.calories || "",
    content: food.content || "",
    totalFat: {
      total: food.totalFat?.total || "",
      saturated: food.totalFat?.saturated || "",
      trans: food.totalFat?.trans || "",
    },
    sodium: food.sodium || "",
    totalCarbohydrates: {
      total: food.totalCarbohydrates?.total || "",
      fiber: food.totalCarbohydrates?.fiber || "",
      sugars: food.totalCarbohydrates?.sugars || "",
    },
    protein: food.protein || "",
    vitamins: {
      B6: food.vitamins?.B6 || "",
      B12: food.vitamins?.B12 || "",
    },
    generalInfo: {
      description: food.generalInfo?.description || "",
      healthRecommendations: food.generalInfo?.healthRecommendations || "",
    },
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const updateFormValues = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const updateNested = (section, key, value) => {
    setFormValues((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleSubmit = () => {
    onSubmit(formValues);
    setIsEditMode(false);
  };

  return (
    <div className={`${s.card} ${s.container}`}>
      <div className={s.header}>
        <h2>{formValues.name || "New Food"}</h2>
        <ButtonPrimary onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? "Cancel" : "Edit"}
        </ButtonPrimary>
      </div>

      {isEditMode ? (
        <>
          <div className={s.inputGroup}>
            <label>ID</label>
            <input
              type="text"
              name="id"
              className="form-control"
              value={formValues.id}
              onChange={updateFormValues}
            />
          </div>

          <div className={s.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formValues.name}
              onChange={updateFormValues}
            />
          </div>

          <div className={s.inputGroup}>
            <label>Calories</label>
            <input
              type="number"
              name="calories"
              className="form-control"
              value={formValues.calories}
              onChange={updateFormValues}
            />
          </div>

          <div className={s.inputGroup}>
            <label>Content</label>
            <input
              type="text"
              name="content"
              className="form-control"
              value={formValues.content}
              onChange={updateFormValues}
            />
          </div>

          <div className={s.subsection}>
            <h5>Total Fat (g)</h5>
            <div className={s.row}>
              <input
                type="number"
                placeholder="Total"
                value={formValues.totalFat.total}
                onChange={(e) =>
                  updateNested("totalFat", "total", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Saturated"
                value={formValues.totalFat.saturated}
                onChange={(e) =>
                  updateNested("totalFat", "saturated", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Trans"
                value={formValues.totalFat.trans}
                onChange={(e) =>
                  updateNested("totalFat", "trans", e.target.value)
                }
              />
            </div>
          </div>

          <div className={s.inputGroup}>
            <label>Sodium (mg)</label>
            <input
              type="number"
              name="sodium"
              className="form-control"
              value={formValues.sodium}
              onChange={updateFormValues}
            />
          </div>

          <div className={s.subsection}>
            <h5>Total Carbohydrates (g)</h5>
            <div className={s.row}>
              <input
                type="number"
                placeholder="Total"
                value={formValues.totalCarbohydrates.total}
                onChange={(e) =>
                  updateNested("totalCarbohydrates", "total", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Fiber"
                value={formValues.totalCarbohydrates.fiber}
                onChange={(e) =>
                  updateNested("totalCarbohydrates", "fiber", e.target.value)
                }
              />
              <input
                type="number"
                placeholder="Sugars"
                value={formValues.totalCarbohydrates.sugars}
                onChange={(e) =>
                  updateNested("totalCarbohydrates", "sugars", e.target.value)
                }
              />
            </div>
          </div>

          <div className={s.inputGroup}>
            <label>Protein (g)</label>
            <input
              type="number"
              name="protein"
              className="form-control"
              value={formValues.protein}
              onChange={updateFormValues}
            />
          </div>

          <div className={s.inputGroup}>
            <label>Description</label>
            <input
              type="text"
              value={formValues.generalInfo.description}
              onChange={(e) =>
                updateNested("generalInfo", "description", e.target.value)
              }
            />
          </div>

          <div className={s.inputGroup}>
            <label>Health Recommendations</label>
            <input
              type="text"
              value={formValues.generalInfo.healthRecommendations}
              onChange={(e) =>
                updateNested(
                  "generalInfo",
                  "healthRecommendations",
                  e.target.value
                )
              }
            />
          </div>

          <div className={s.submit_btn}>
            <ButtonPrimary onClick={handleSubmit}>Save</ButtonPrimary>
          </div>
        </>
      ) : (
        <>
          <div className={s.item}>
            <strong>ID:</strong> {formValues.id}
          </div>
          <div className={s.item}>
            <strong>Calories:</strong> {formValues.calories}
          </div>
          <div className={s.item}>
            <strong>Content:</strong> {formValues.content}
          </div>
          <div className={s.item}>
            <strong>Fat:</strong> Total {formValues.totalFat.total}, Saturated{" "}
            {formValues.totalFat.saturated}, Trans {formValues.totalFat.trans}
          </div>
          <div className={s.item}>
            <strong>Sodium:</strong> {formValues.sodium} mg
          </div>
          <div className={s.item}>
            <strong>Carbs:</strong> Total {formValues.totalCarbohydrates.total},
            Fiber {formValues.totalCarbohydrates.fiber}, Sugars{" "}
            {formValues.totalCarbohydrates.sugars}
          </div>
          <div className={s.item}>
            <strong>Protein:</strong> {formValues.protein} g
          </div>
          <div className={s.item}>
            <strong>Description:</strong> {formValues.generalInfo.description}
          </div>
          <div className={s.item}>
            <strong>Health Recommendations:</strong>{" "}
            {formValues.generalInfo.healthRecommendations}
          </div>
        </>
      )}
    </div>
  );
}
