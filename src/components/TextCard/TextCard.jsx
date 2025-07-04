import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom";

export function TextCard({
  id,
  userId,
  consumedFoods,
  foodList,
  timestamp,
  review,
  onClickCard,
  onClickTrash,
  onClickUser,
}) {
  const navigate = useNavigate();
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }

  function onClickUser_(e) {
    onClickUser();
    e.stopPropagation();
  }

  // Format timestamp into readable date
  const formattedDate = new Date(parseInt(timestamp)).toLocaleString();

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
          <h5 className="card-title">{review}</h5>
          <Trash
            size={20}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onClick={onClickTrash_}
          />
        </div>
        <div className={s.timestamp}>Date: {formattedDate}</div>

        <p className={`${s.text_content} ${s.meta_row} ${s.id_row}`}>
          ID: {id}
        </p>

        <div className={`${s.text_content} ${s.meta_row} ${s.user_row}`}>
          User ID: {userId}
          <div className="col d-flex align-items-end">
            <button
              type="button"
              className="btn btn-info"
              onClick={onClickUser_}
            >
              User Info
            </button>
          </div>
        </div>

        <div className={`${s.meta_row} ${s.food_row}`}>
          <label className={s.food_label}>Consumed Foods</label>
          <div className={s.food_table_wrapper}>
            <table className={s.food_table}>
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Amount</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(consumedFoods) && consumedFoods.length > 0 ? (
                  consumedFoods.map((foodItem, index) => {
                    const food = foodList.find(
                      (f) => f.name === foodItem.foodName
                    );

                    return (
                      <tr key={index}>
                        <td>
                          {food ? (
                            <span
                              className={s.food_link}
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/food/${food.id}`);
                              }}
                            >
                              {foodItem.foodName}
                            </span>
                          ) : (
                            foodItem.foodName
                          )}
                        </td>
                        <td>
                          {foodItem.amount} {foodItem.unit}
                        </td>
                        <td>{foodItem.calories} kcal</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="3">No food data available</td>
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
