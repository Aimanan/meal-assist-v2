import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";

export function UserCard({
  id,
  firstName,
  age,
  weight,
  height,
  recommendedCal,
  onClickCard,
  onClickTrash,
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }

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
          <h5 className="card-title">{firstName}</h5>
          <Trash
            size={20}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onClick={onClickTrash_}
          />
        </div>
        <p className={`${s.text_content} ${s.meta_row} ${s.id_row}`}>
          ID: {id}
        </p>
        <p className={`${s.text_content} ${s.meta_row} ${s.user_row}`}>
          First Name: {firstName}
        </p>
        <p className={`${s.text_content} ${s.meta_row} ${s.user_row}`}>
          Age: {age}
        </p>
        <p className={`${s.text_content} ${s.meta_row} ${s.user_row}`}>
          Height: {height}
        </p>
        <p className={`${s.text_content} ${s.meta_row} ${s.user_row}`}>
          Weight: {weight}
        </p>
        <p className={`${s.text_content} ${s.meta_row} ${s.user_row}`}>
          Recommended Cal: {recommendedCal}
        </p>
      </div>
    </div>
  );
}
