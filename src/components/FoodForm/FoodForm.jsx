import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { useState } from "react";

export function FoodForm({ isEditable = true, food, onSubmit = {} }) {
  const [formValues, setFormValues] = useState({
    id: food?.id,
    name: food?.name,
    calories: food?.calories,
    content: food?.content,
    totalFat: food?.totalFat || {},
    sodium: food?.sodium,
    totalCarbohydrates: food?.totalCarbohydrates || {},
    protein: food?.protein,
    vitamins: food?.vitamins || {},
    generalInfo: food?.generalInfo || {},
  });

  //TODO: update, delete?

  //   const updateFormValues = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;

  //     setFormValues({ ...formValues, [name]: value });
  //   };

  //   const handleFoodChange = (index, field, value) => {
  //     const newFoods = [...formValues.consumedFoods];
  //     newFoods[index] = {
  //       ...newFoods[index],
  //       [field]:
  //         field === "amount" || field === "calories" ? Number(value) : value,
  //     };
  //     setFormValues({ ...formValues, consumedFoods: newFoods });
  //   };

  //   const handleAddFood = () => {
  //     setFormValues({
  //       ...formValues,
  //       consumedFoods: [
  //         ...formValues.consumedFoods,
  //         { foodName: "", amount: 0, unit: "", calories: 0 },
  //       ],
  //     });
  //   };

  //   const handleRemoveFood = (index) => {
  //     const newFoods = formValues.consumedFoods.filter(
  //       (current, i) => i !== index
  //     );
  //     setFormValues({ ...formValues, consumedFoods: newFoods });
  //   };

  //   const nameInput = (
  //     <>
  //       <label className="form-label">Name</label>
  //       <input
  //         type="text"
  //         name="name"
  //         className="form-control"
  //         value={formValues.name}
  //       />
  //     </>
  //   );

  //   const caloriesInput = (
  //     <>
  //       <label className="form-label">Calories</label>
  //       <input
  //         type="text"
  //         name="id"
  //         className="form-control"
  //         value={formValues.calories}
  //       />
  //     </>
  //   );

  //   const idInput = (
  //     <>
  //       <label className="form-label">id</label>
  //       <input
  //         type="text"
  //         name="id"
  //         className="form-control"
  //         value={formValues.id}
  //       />
  //     </>
  //   );

  //   const totalFatInput = (
  //     <>
  //       <label className="form-label">Total Fat Information</label>
  //       <div className="card p-3 mb-3">
  //         <div className="row mb-2">
  //           <div className="col">
  //             <label className="form-label">Total Fat (g)</label>
  //             <input
  //               type="number"
  //               className="form-control"
  //               value={formValues.totalFat.total}
  //             />
  //           </div>
  //           <div className="col">
  //             <label className="form-label">Saturated Fat (g)</label>
  //             <input
  //               type="number"
  //               className="form-control"
  //               value={formValues.totalFat.saturated}
  //             />
  //           </div>
  //           <div className="col">
  //             <label className="form-label">Trans Fat (g)</label>
  //             <input
  //               type="number"
  //               className="form-control"
  //               value={formValues.totalFat.trans}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );

  //   const contentInput = (
  //     <>
  //       <label className="form-label">Content</label>
  //       <input
  //         type="text"
  //         name="content"
  //         className="form-control"
  //         value={formValues.content}
  //       />
  //     </>
  //   );

  //   const totalCarbohydratesInput = (
  //     <>
  //       <label className="form-label">Total Carbohydrates Information</label>
  //       <div className="card p-3 mb-3">
  //         <div className="row mb-2">
  //           <div className="col">
  //             <label className="form-label">Total Carbohydrates (g)</label>
  //             <input
  //               type="number"
  //               className="form-control"
  //               value={formValues.totalCarbohydrates.total}
  //             />
  //           </div>
  //           <div className="col">
  //             <label className="form-label">Fiber (g)</label>
  //             <input
  //               type="number"
  //               className="form-control"
  //               value={formValues.totalCarbohydrates.fiber}
  //             />
  //           </div>
  //           <div className="col">
  //             <label className="form-label">Sugars (g)</label>
  //             <input
  //               type="number"
  //               className="form-control"
  //               value={formValues.totalCarbohydrates.sugars}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );

  //   const sodiumInput = (
  //     <>
  //       <label className="form-label">Sodium</label>
  //       <input
  //         type="text"
  //         name="sodium"
  //         className="form-control"
  //         value={formValues.sodium}
  //       />
  //     </>
  //   );

  //   const proteinInput = (
  //     <>
  //       <label className="form-label">Protein</label>
  //       <input
  //         type="text"
  //         name="protein"
  //         className="form-control"
  //         value={formValues.protein}
  //       />
  //     </>
  //   );

  //   const generalInfoInput = (
  //     <>
  //       <label className="form-label">Information</label>
  //       <div className="card p-3 mb-3">
  //         <div className="row mb-2">
  //           <div className="col">
  //             <label className="form-label">Description (g)</label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               value={formValues.generalInfo.description}
  //             />
  //           </div>
  //           <div className="col">
  //             <label className="form-label">Health Recommendations (g)</label>
  //             <input
  //               type="text"
  //               className="form-control"
  //               value={formValues.generalInfo.healthRecommendations}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );

  //   const submitBtn = (
  //     <div className={s.submit_btn}>
  //       <ButtonPrimary onClick={() => onSubmit(formValues)}>Submit</ButtonPrimary>
  //     </div>
  //   );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{food.name}</h2>
        </div>
      </div>

      <div className={`mb-3 ${s.review_input_container}`}>Id: {food.id}</div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>Calories:</strong> {food.calories}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>Content:</strong> {food.content}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>Fats:</strong> Total: {food.totalFat.total}, Saturated:{" "}
        {food.totalFat.saturated}, Trans: {food.totalFat.trans}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>Sodium:</strong> {food.sodium}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>Carbohydrates:</strong> Total: {food.totalCarbohydrates.total},
        Fiber:
        {food.totalCarbohydrates.fiber}, Sugars:
        {food.totalCarbohydrates.sugars}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>Protein:</strong> {food.protein}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>Vitamins:</strong>
        {Object.entries(food.vitamins).map(([key, value]) => (
          <div key={key}>
            {key}: {value}
          </div>
        ))}
      </div>
      <div className={`mb-3 ${s.review_input_container}`}>
        <strong>General Info: </strong> Info: {food.generalInfo.description}
        <div></div>
        Health Recommendations:
        {food.generalInfo.healthRecommendations}
      </div>

      {/* {onSubmit && submitBtn} */}
    </div>
  );
}
