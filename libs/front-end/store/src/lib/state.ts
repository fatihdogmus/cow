import { UserReducers } from "./user/user.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: UserReducers
  }
});

export type DispatchType = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
