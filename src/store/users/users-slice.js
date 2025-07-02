import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.userList = action.payload.map(formatId);
    },
    addUser: (state, action) => {
      state.users.userList.push(formatId(action.payload));
    },
  },
});

function formatId(user) {
  return {
    ...user,
    id: user.id.toString(),
  };
}

export const { setUserList } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;