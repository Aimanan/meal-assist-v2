import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

export function UserForm({
  isEditable = true,
  user = {},
  onClickDelete,
  onClickEdit,
  onSubmit,
}) {
  const [formValues, setFormValues] = useState({
    id: user?.id || "",
    firstName: user?.firstName || "",
    age: user?.age || "",
    height: user?.height || "",
    weight: user?.weight || "",
    recommendedCal: user?.recommendedCal || "",
  });

  const updateFormValues = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && <PencilFill onClick={onClickEdit} className={s.icon} />}
      </div>
      <div className="col-1">
        {onClickDelete && (
          <TrashFill onClick={onClickDelete} className={s.icon} />
        )}
      </div>
    </>
  );

  const createInput = (label, name, type = "text") => (
    <div className="mb-5">
      <label className="form-label">{label}</label>
      <input
        onChange={updateFormValues}
        type={type}
        name={name}
        className="form-control"
        value={formValues[name]}
        disabled={!isEditable && name === "id"} // Disable editing id if needed
      />
    </div>
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
          <h2 className="mb-3">First Name: {user?.firstName}</h2>
        </div>
        {actionIcons}
      </div>

      <div className={`mb-3 ${s.review_input_container}`}>
        {isEditable && createInput("First Name", "firstName")}
      </div>
      <div className="mb-3">
        {isEditable ? createInput("ID", "id") : <pre>Id: {user?.id}</pre>}
      </div>
      <div className="mb-3">
        {isEditable ? (
          createInput("Age", "age", "number")
        ) : (
          <pre>Age: {user?.age}</pre>
        )}
      </div>
      <div className="mb-3">
        {isEditable ? (
          createInput("Weight", "weight", "number")
        ) : (
          <pre>Weight: {user?.weight}</pre>
        )}
      </div>
      <div className="mb-3">
        {isEditable ? (
          createInput("Height", "height", "number")
        ) : (
          <pre>Height: {user?.height}</pre>
        )}
      </div>
      <div className="mb-3">
        {isEditable ? (
          createInput("Recommended Calories", "recommendedCal", "number")
        ) : (
          <pre>Recommended Calories: {user?.recommendedCal}</pre>
        )}
      </div>
      {onSubmit && submitBtn}
    </div>
  );
}
