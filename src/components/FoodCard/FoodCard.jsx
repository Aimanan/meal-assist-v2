import { useState } from "react";
import s from "./style.module.css";

export function FoodCard({
  id,
  name,
  calories,
  content,
  totalFat,
  sodium,
  totalCarbohydrates,
  protein,
  vitamins,
  generalInfo,
  onClickCard,
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <div
      onClick={onClickCard}
      className={`card ${s.container}`}
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      <div className="card-body">
        <div className={s.title_row}>
          <h5 className="card-title">{name}</h5>
        </div>

        <p className={`${s.text_content} ${s.meta_row} ${s.id_row}`}>
          ID: {id}
        </p>

        <p className={`${s.text_content} ${s.meta_row} ${s.id_row}`}>
          Calories: {calories}
        </p>

        <p className={`${s.text_content} ${s.meta_row} ${s.id_row}`}>
          Content: {content}
        </p>

        <div className={`${s.meta_row} ${s.food_row}`}>
          <label className={s.food_label}>Total Fat</label>
          <div className={s.food_table_wrapper}>
            <table className={s.food_table}>
              <thead>
                <tr>
                  <th>Total</th>
                  <th>Saturated</th>
                  <th>Trans</th>
                </tr>
              </thead>
              <tbody>
                {totalFat && typeof totalFat === "object" ? (
                  <tr>
                    <td>{totalFat.total}</td>
                    <td>{totalFat.saturated}</td>
                    <td>{totalFat.trans}</td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="3">No fats data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className={`${s.text_content} ${s.meta_row} ${s.id_row}`}>
          Sodium: {sodium}
        </p>

        <div className={`${s.meta_row} ${s.food_row}`}>
          <label className={s.food_label}>Total Carbohydrates</label>
          <div className={s.food_table_wrapper}>
            <table className={s.food_table}>
              <thead>
                <tr>
                  <th>Total</th>
                  <th>Fiber</th>
                  <th>Sugars</th>
                </tr>
              </thead>
              <tbody>
                {totalCarbohydrates &&
                typeof totalCarbohydrates === "object" ? (
                  <tr>
                    <td>{totalCarbohydrates.total}</td>
                    <td>{totalCarbohydrates.fiber}</td>
                    <td>{totalCarbohydrates.sugars}</td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="3">No carbohydrates data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className={`${s.text_content} ${s.meta_row} ${s.id_row}`}>
          Protein: {protein}
        </p>

        <div className={`${s.meta_row} ${s.food_row}`}>
          <label className={s.food_label}>Vitamins</label>
          <div className={s.food_table_wrapper}>
            <table className={s.food_table}>
              <thead>
                <tr>
                  <th>Vitamin</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {vitamins &&
                typeof vitamins === "object" &&
                Object.keys(vitamins).length > 0 ? (
                  Object.entries(vitamins).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No vitamins data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`${s.meta_row} ${s.food_row}`}>
          <label className={s.food_label}>General Info</label>
          <div className={s.food_table_wrapper}>
            <table className={s.food_table}>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>healthRecommendations</th>
                </tr>
              </thead>
              <tbody>
                {generalInfo && typeof generalInfo === "object" ? (
                  <tr>
                    <td>{generalInfo.description}</td>
                    <td>{generalInfo.healthRecommendations}</td>
                  </tr>
                ) : (
                  <tr>
                    <td colSpan="3">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
