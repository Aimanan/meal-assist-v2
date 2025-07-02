import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserForm } from "../../components/UserForm/UserForm";
import { useState } from "react";

export function User(props) {
  const { userId } = useParams();
  const user = useSelector((store) =>
    store.users.userList.find((user) => user.id === userId)
  );

  const [isEditable, setIsEditable] = useState(false);

  const submit = (formValues) => {
    alert("submit");
  };

  return (
    <>
      {user && (
        <UserForm
          isEditable={isEditable}
          user={user}
          // id={user.id}
          // firstName={user.firstName}
          // age={user.age}
          // height={user.height}
          // weight={user.weight}
          // recommendedCal={user.recommendedCal}
          onClickDelete={() => alert("delete")}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
