import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { UserCard } from "../../components/UserCard/UserCard";

export function UserList() {
  const userList = useSelector((store) => store.users.userList);
  const navigate = useNavigate();
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {userList.map((user) => (
        <div key={user.id} className={s.card_container}>
          <UserCard
            id={user.id}
            firstName={user.firstName}
            age={user.age}
            height={user.height}
            weight={user.weight}
            recommendedCal={user.recommendedCal}
            onClickTrash={() => alert("onClickTrash()")}
            onClickCard={() => navigate(user.id)}
          />
        </div>
      ))}
    </div>
  );
}
