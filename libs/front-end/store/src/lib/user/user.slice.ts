import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Role } from "@common";

export interface LoggedInUser {
  id: number;
  name: string;
  surname: string;
  username: string;
  role: Role;
}

export const initialUserState: LoggedInUser = {
  id: 0,
  name: "",
  surname: "",
  username: "",
  role: Role.ANONYMOUS
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login(state, { payload }: PayloadAction<LoggedInUser>) {
      setUser(state, payload);
    },
    logout(state) {
      setUser(state, initialUserState);
    }
  }
});

function setUser(state: LoggedInUser, user: LoggedInUser) {
  state.id = user.id;
  state.name = user.name;
  state.surname = user.surname;
  state.username = user.username;
  state.role = user.role;
}

export const UserReducers = userSlice.reducer;
export const UserActions = userSlice.actions;
