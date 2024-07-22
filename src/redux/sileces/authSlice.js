import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      token: "",
      isAuth: true,
      isAdmin: false,
      userId: "user7",
      userName: "Mehmet Fatih T.",
}

export const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            loading: (state, action) => {
                  state.token = action.payload.token;
                  state.isAuth = true;
            },
            logout: (state) => {
                  state.isAuth = false;
                  state.token = "";
            },
      },
})

export const { loading, logout } = authSlice.actions

export default authSlice.reducer