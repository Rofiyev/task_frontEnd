import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IUser } from "../interface";
import { usersLogin } from "../config";

export interface I_Auth {
  user: null | IUser;
  users: IAuth[];
}

const initialState: I_Auth = {
  user: null,
  users: usersLogin,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state: I_Auth, action: PayloadAction<IAuth>) => {
      state.user = action.payload;
      state.users.push(action.payload);
    },
  },
});

export const { setUser } = authSlice.actions;
export const authReducer = (state: RootState) => state.auth;
export default authSlice.reducer;
