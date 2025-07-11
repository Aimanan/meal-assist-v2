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

  if (!user) {
    return null;
  }

  return (
    <UserForm
      isEditable={isEditable}
      user={user}
      onClickDelete={() => alert("delete")}
      onClickEdit={() => setIsEditable(!isEditable)}
      onSubmit={isEditable && submit}
    />
  );
}
