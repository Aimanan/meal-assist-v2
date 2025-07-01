import s from "./style.module.css";
import logoSrc from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { Logo } from "../Logo/Logo";

export function Header(props) {
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="Magic AI Meal"
          subtitle={"Eat better!"}
          image={logoSrc}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary onClick={() => navigate("/meal/new")}>
          Add meal +
        </ButtonPrimary>
      </div>
    </div>
  );
}
