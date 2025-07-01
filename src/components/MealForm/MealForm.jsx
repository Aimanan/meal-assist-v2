import { PencilFill, TrashFill } from "react-bootstrap-icons";
import s from "./style.module.css";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

export function MealForm({ review }) {
  const actionIcons = (
    <>
      <div className="col-1">
        <PencilFill className={s.icon} />
      </div>
      <div className="col-1">
        <TrashFill className={s.icon} />
      </div>
    </>
  );

  const reviewInput = (
    <>
      <label className="form-label">Review</label>
      <input type="text" name="review" className="form-control" />
    </>
  );

  const consumedFoodsInput = (
    <>
      <label className="form-label">Consumed Foods</label>
      <textarea
        type="text"
        name="consumedFoods"
        className="form-control"
        row="5"
      />
    </>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary>Submit</ButtonPrimary>
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

      <div className={`mb-3 ${s.review_input_container}`}>{reviewInput}</div>
      <div className="mb-3">{consumedFoodsInput}</div>
      {submitBtn}
    </div>
  );
}
