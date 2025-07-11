import s from "./style.module.css";
import logoSrc from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { Logo } from "../Logo/Logo";

export function Header(props) {
  const navigate = useNavigate();
  return (
    <div className={`row align-items-center ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="Magic AI Meal"
          subtitle="Eat better!"
          image={logoSrc}
          className={s.logo}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end d-flex justify-content-end flex-wrap gap-2">
        <ButtonPrimary onClick={() => navigate("/meal/new")}>
          Add meal
        </ButtonPrimary>
        <ButtonPrimary onClick={() => navigate("/food/new")}>
          Add food
        </ButtonPrimary>
      </div>
    </div>
  );
}
